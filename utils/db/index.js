const logger = require('nlogs')(module)
const { Types } = require('mongoose')
const { connect, connection } = require('./connect')
const constants = require('./constants')

exports.connect = connect
exports.connection = connection
exports.constants = constants
exports.Types = Types

exports.Notes = require('./models/notes')
exports.Users = require('./models/users')
