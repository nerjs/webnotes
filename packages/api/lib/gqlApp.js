const path = require('path')
const createApp = require('@nerjs/express/app')
const createServer = require('@nerjs/gql/server')
const http = require('http')
const middlewares = require('../middlewares')
const session = require('./session')

// 'combined' | 'dev' | 'tiny' | 'short'
const app = createApp({
    logger: 'tiny',
    cookies: false,
    bodyUrlcoded: false,
    bodyJson: false,
})

app.use(session)

app.use((req, res, next) => {
    req.session.IP = (req.header('x-forwarded-for') || req.connection.remoteAddress)
        .split(',')[0]
        .trim()
    req.session.userAgent = req.header('user-agent')
    next()
})

const gqlServer = createServer({
    app,
    path: '/gql',
    playground: true,
    types: path.join(__dirname, '..', 'types'),
    resolvers: path.join(__dirname, '..', 'resolvers'),
    middlewares,
    cors: {
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
        origin: (o, cb) => cb(null, o),
    },
    context: ({ req, connection }) => {
        if (connection) return connection.context
        return {
            session: req.session,
            sessionStore: req.sessionStore,
        }
    },
    subscriptions: {
        path: '/sub',
        onConnect: (conn, ws, ctx) => {
            const promise = new Promise((resolve, reject) => {
                session(ctx.request, {}, err =>
                    err
                        ? reject(err)
                        : resolve({
                              session: ctx.request.session,
                              sessionStore: ctx.request.sessionStore,
                          }),
                )
            })

            return promise
        },
        onOperation(...args) {
            console.log({ args })
        },
        onDisconnect: (...args) => {
            // console.log('onDisconnect', args)
        },
    },
})

const httpServer = http.createServer(app)

gqlServer.installSubscriptionHandlers(httpServer)

module.exports = httpServer
