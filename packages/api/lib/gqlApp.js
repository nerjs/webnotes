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

const gqlServer = createServer({
    app,
    path: '/gql',
    playground: true,
    types: path.join(__dirname, '..', 'types'),
    resolvers: path.join(__dirname, '..', 'resolvers'),
    middlewares,
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: 'same-origin',
    },
    context: ({ req, connection }) => {
        // if (connection) console.log('-', connection.context)
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
