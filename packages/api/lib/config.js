require('dotenv').config()
const fs = require('fs')
const { autoConnect } = require('@webnotes/db')

require.extensions['.gql'] = function(module, path) {
    const file = fs.readFileSync(path, {
        encoding: 'utf8',
    })
    module.exports = file
    return 1
}

autoConnect()
