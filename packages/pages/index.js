require('./config')
const path = require('path')
const logger = require('nlogs')(module)
const createApp = require('@nerjs/express/app')
const beforeRouterMiddlewares = require('./middlewares/beforeRouter')
const afterRouterMiddlewares = require('./middlewares/afterRouter')
const router = require('./routes')

const { PAGES_SERVER_PORT, PAGES_SERVER_APP_PORT, NODE_ENV } = process.env
const PORT = Number(PAGES_SERVER_APP_PORT || PAGES_SERVER_PORT)

const app = createApp({
    logger: NODE_ENV === 'production' ? false : 'dev',
    views: path.join(__dirname, 'views'),
})

beforeRouterMiddlewares(app)

app.use(router)

afterRouterMiddlewares(app)

app.listen(PORT, err => {
    if (err) return logger.error(err)
    logger.info('Start pages server', '\n\t\t', `http://localhost:${PORT}`)
})
