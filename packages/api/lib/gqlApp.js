const path = require('path')
const createApp = require('@nerjs/express/app')
const createServer = require('@nerjs/gql/server')
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

createServer({
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
    context: ({ req }) => ({
        session: req.session,
        sessionStore: req.sessionStore,
    }),
})

module.exports = app
