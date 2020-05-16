require('dotenv').config()
const fs = require('fs')
const { connect } = require('@webnotes/db')

require.extensions['.gql'] = function(module, path) {
    const file = fs.readFileSync(path, {
        encoding: 'utf8',
    })
    module.exports = file
    return 1
}

const {
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_DBNAME,
    MONGODB_PROTOCOL,
    MONGODB_HOST,
    MONGODB_PORT,
} = process.env

connect({
    dbProtocol: MONGODB_PROTOCOL || 'mongodb',
    dbHost: MONGODB_HOST,
    dbPort: MONGODB_PORT,
    dbName: MONGODB_DBNAME,
    dbUser: MONGODB_USERNAME,
    dbPassword: MONGODB_PASSWORD,
})
