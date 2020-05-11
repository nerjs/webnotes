require('./lib/config')
const logger = require('nlogs')(module)
const gqlApp = require('./app')

const { API_SERVER_PORT, API_SERVER_APP_PORT, API_SERVER_HOST } = process.env
const PORT = Number(API_SERVER_APP_PORT || API_SERVER_PORT)

console.log('\n')
logger.log('Try start server')

gqlApp.listen(PORT, err => {
    if (err) return logger.error(err)

    logger.log('Start API server: ', `http://${API_SERVER_HOST}:${PORT}`)
})
