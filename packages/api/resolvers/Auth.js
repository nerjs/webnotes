const { User } = require('@nbs/db')
const ValidationGqlError = require('@nerjs/errors/ValidationGqlError')

const Query = {
    me: (_, args, { session }) => (session.user ? { is: true, user: session.user } : { is: false }),
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

        return {
            is: true,
            user,
        }
    },
    login: async (_, { login, password }, { session }) => {
        const user = await User.findOne({ login })

        if (!user || !user.checkPassword(password))
            throw new ValidationGqlError('Invalid username or password')

        session.user = user.toObject()

        return {
            is: true,
            user,
        }
    },
    logout: async (_, args, { session }) => {
        await new Promise((resolve, reject) =>
            session.destroy(err => (err ? reject(err) : resolve())),
        )
        return true
    },
}

module.exports = {
    Query,
    Mutation,
}
