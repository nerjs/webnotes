const dotenv = require('dotenv').config()
const fs = require('fs')
const { connect } = require('@nbs/db')

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
    MONGODB_HOST,
    MONGODB_PORT,
} = process.env

connect({
    dbHost: MONGODB_HOST,
    dbPort: MONGODB_PORT,
    dbName: MONGODB_DBNAME,
})
