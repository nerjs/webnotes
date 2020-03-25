const logger = require('nlogs')(module)
const { connect, connection } = require('./connect')
const constants = require('./constants')

exports.connect = connect
exports.connection = connection
exports.constants = constants

exports.Notes = require('./models/notes')
