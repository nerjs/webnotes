const { User } = require('@webnotes/db')
const ValidationGqlError = require('@nerjs/errors/ValidationGqlError')
const ForbiddenGqlError = require('@nerjs/errors/ForbiddenGqlError')
const NotFoundGqlError = require('@nerjs/errors/NotFoundGqlError')
const logger = require('nlogs')(module)
const { filter, UPDATE_AUTH } = require('../lib/triggers')
const pubsub = require('../lib/pubsub')

const Query = {
    me: (_, args, { session }) => (session.user ? { is: true, user: session.user } : { is: false }),
    mySessions: async (_, __, { session, sessionStore }) => {
        return (await sessionStore.getSessionByUserId(session.userId)).map(
            ({ _id, expires, session: { userAgent, IP } }) => ({
                id: _id,
                expires,
                userAgent: userAgent || 'none',
                IP: IP || '::1',
                current: _id === session.id,
            }),
        )
    },
}

const Mutation = {
    registration: async (_, { login, password }, { session }) => {
        if (await User.exists({ login }))
            throw new ValidationGqlError('This user already exists', {
                map: { login: 'This user already exists.' },
            })

        const user = new User({ login, password })

        await user.save()
        session.user = user.toObject()
        session.userId = user.id

        logger.debug('New user', { id: user.id, login: user.login })
        const auth = { is: true, user }

        pubsub.publish(UPDATE_AUTH, { sessionId: session.id, auth })

        return true
    },
    login: async (_, { login, password }, { session }) => {
        const user = await User.findOne({ login })

        if (!user || !user.checkPassword(password))
            throw new ValidationGqlError('Invalid username or password')

        session.user = user.toObject()
        session.userId = user.id
        logger.debug('Login user', { sessionId: session.id, id: user.id, login: user.login })
        const auth = { is: true, user }

        pubsub.publish(UPDATE_AUTH, { sessionId: session.id, auth })

        return true
    },
    logout: async (_, args, { session }) => {
        const sessionId = session.id
        logger.debug('Logout user', { sessionId, id: session.userId, login: session.user.login })
        session.destroy()
        pubsub.publish(UPDATE_AUTH, { sessionId, auth: { is: false } })
        return true
    },
    removeSession: async (_, { sessionId }, { session, sessionStore }) => {
        const remoteSession = await sessionStore.get(sessionId)
        if (!remoteSession) throw new NotFoundGqlError('Session not found')
        const {
            userId,
            user: { login },
        } = remoteSession
        if (userId !== session.userId) throw new ForbiddenGqlError()
        await sessionStore.destroy(sessionId)
        logger.debug('Logout session', { userId, login })
        pubsub.publish(UPDATE_AUTH, { sessionId, auth: { is: false } })
        return true
    },
}

const Subscription = {
    auth: filter(UPDATE_AUTH, ({ sessionId }, __, { session }) => sessionId === session.id),
}

module.exports = {
    Query,
    Mutation,
    Subscription,
}
