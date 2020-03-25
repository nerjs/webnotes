const mongoose = require('mongoose')

const schema = require('./schema')
const NotesClass = require('./class')

schema.loadClass(NotesClass)

module.exports = mongoose.model('Notes', schema)
