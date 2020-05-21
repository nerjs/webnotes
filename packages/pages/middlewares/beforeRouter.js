const clientTemplate = require('./clientTemplate')

module.exports = app => {
    app.use((req, res, next) => {
        res.type('html')
        res.removeHeader('X-Powered-By')
        next()
    })

    app.use(clientTemplate)
}
