const path = require('path')
const createApp = require('@nerjs/express/app')
const createServer = require('@nerjs/gql/server')
const middlewares = require('./middlewares')

// 'combined' | 'dev' | 'tiny' | 'short'
const app = createApp({
    logger: 'tiny',
})

createServer({
    app,
    path: '/gql',
    playground: true,
    types: path.join(__dirname, 'types'),
    resolvers: path.join(__dirname, 'resolvers'),
    middlewares,
})

module.exports = app
