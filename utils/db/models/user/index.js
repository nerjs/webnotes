const mongoose = require('mongoose')

const schema = require('./schema')
const UsersClass = require('./class')

schema.loadClass(UsersClass)

const User = mongoose.model('User', schema)

module.exports = User
