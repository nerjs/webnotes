require('./lib/config')
const logger = require('nlogs')(module)
const gqlApp = require('./lib/gqlApp')

const { API_SERVER_PORT } = process.env

gqlApp.listen(Number(API_SERVER_PORT), err => {
    if (err) return logger.error(err)

    logger.info('Start API server: ', `\n\thttp://localhost:${API_SERVER_PORT}`)
})
