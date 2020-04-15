const path = require('path')
const createApp = require('@nerjs/express/app')
const createServer = require('@nerjs/gql/server')
const http = require('http')
const middlewares = require('../middlewares')
const session = require('./session')
const { context, wsOnConnect } = require('./context')

const { API_SERVER_PATH, SUBSCRIBE_SERVER_PATH } = process.env

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
    req.currentWindow = req.header('Current-Window')
    next()
})

const gqlServer = createServer({
    app,
    path: API_SERVER_PATH,
    playground: true,
    types: path.join(__dirname, '..', 'types'),
    resolvers: path.join(__dirname, '..', 'resolvers'),
    middlewares,
    cors: {
        // methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
        origin: (o, cb) => cb(null, o),
    },
    context,
    subscriptions: {
        path: SUBSCRIBE_SERVER_PATH,
        onConnect: wsOnConnect,
        // onOperation(...args) {},
        // onDisconnect(...args) {},
    },
})

const httpServer = http.createServer(app)

gqlServer.installSubscriptionHandlers(httpServer)

module.exports = httpServer
