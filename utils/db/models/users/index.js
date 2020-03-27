const mongoose = require('mongoose')

const schema = require('./schema')
const UsersClass = require('./class')

schema.loadClass(UsersClass)

const Users = mongoose.model('Users', schema)

module.exports = Users
