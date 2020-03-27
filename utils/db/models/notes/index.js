const mongoose = require('mongoose')
const { NOTE_TYPES } = require('../../constants')

const schema = require('./schema')
const NotesClass = require('./class')
const dirSchema = require('./noteTypes/dir')
const textSchema = require('./noteTypes/text')
const linkSchema = require('./noteTypes/link')

schema.loadClass(NotesClass)

const Notes = mongoose.model('Notes', schema)

// all types
Notes.discriminator(NOTE_TYPES.DIR, dirSchema)
Notes.discriminator(NOTE_TYPES.TEXT, textSchema)
Notes.discriminator(NOTE_TYPES.LINK, linkSchema)

module.exports = Notes
module.exports.NOTE_TYPES = NOTE_TYPES
