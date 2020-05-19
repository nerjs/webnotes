const HttpError = require('@nerjs/errors/HttpError')

module.exports = (req, res, next) => {
    const err = new HttpError(Number(req.params.errorCode))
    next(err)
}
