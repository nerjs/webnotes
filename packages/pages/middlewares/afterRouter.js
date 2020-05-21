const logger = require('nlogs')(module)
const HttpError = require('@nerjs/errors/HttpError')

const { NODE_ENV } = process.env

module.exports = app => {
    app.use((req, res, next) => next(new HttpError(404)))

    app.use((err, req, res, next) => {
        if (err instanceof HttpError) return next(err)
        logger.error(err)
        next(new HttpError(500, err.message))
    })

    app.use((error, req, res, next) => {
        res.status(error.code)
        res.render('error', { error, canStack: NODE_ENV !== 'production' })
    })
}
