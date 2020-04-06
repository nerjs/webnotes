require('./lib/config')
const logger = require('nlogs')(module)
const gqlApp = require('./lib/gqlApp')

const { API_SERVER_PORT } = process.env

console.log('\n')
logger.log('Try start server')

gqlApp.listen(Number(API_SERVER_PORT), err => {
    if (err) return logger.error(err)

    logger.log('Start API server: ', `http://localhost:${API_SERVER_PORT}`)
})
