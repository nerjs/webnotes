const { Types } = require('mongoose')
const { connect, connection } = require('./connect')

exports.connect = connect
exports.connection = connection
exports.Types = Types

exports.Notes = require('./models/notes')
exports.User = require('./models/user')
