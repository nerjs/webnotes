const path = require('path')
const createApp = require('@nerjs/express/app')
const createServer = require('@nerjs/gql/server')
const middlewares = require('./middlewares')

const app = createApp({})

createServer({
    app,
    path: '/gql',
    playground: true,
    types: path.join(__dirname, 'types'),
    resolvers: path.join(__dirname, 'resolvers'),
    middlewares,
})

module.exports = app
