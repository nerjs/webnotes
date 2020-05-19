const { Types } = require('mongoose')
const { connect, autoConnect, connection } = require('./connect')

exports.connect = connect
exports.autoConnect = autoConnect
exports.connection = connection
exports.Types = Types

exports.Notes = require('./models/notes')
exports.User = require('./models/user')
