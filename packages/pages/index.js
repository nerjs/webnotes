require('./config')
const path = require('path')
const logger = require('nlogs')(module)
const createApp = require('@nerjs/express/app')
const HttpError = require('@nerjs/errors/HttpError')
const staticMdw = require('./staticMdw')
const router = require('./routes')

const { PAGES_SERVER_PORT, PAGES_SERVER_APP_PORT, NODE_ENV } = process.env
const PORT = Number(PAGES_SERVER_APP_PORT || PAGES_SERVER_PORT)

const app = createApp({
    views: path.join(__dirname, 'views'),
})

app.use((req, res, next) => {
    res.type('html')
    next()
})

app.use(staticMdw)

app.use(router)

app.use((req, res, next) => next(new HttpError(404)))

app.use((err, req, res, next) => {
    if (err instanceof HttpError) return next(err)
    next(new HttpError(500, err.message))
})

app.use((error, req, res, next) => {
    res.status(error.code)
    res.render('error', { error, canStack: NODE_ENV !== 'production' })
})

app.listen(PORT, err => {
    if (err) return logger.error(err)
    logger.info('Start pages server', '\n\t\t', `http://localhost:${PORT}`)
})
