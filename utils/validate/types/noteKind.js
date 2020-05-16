const yup = require('yup')
const { NOTE_TYPES_ARR } = require('@webnotes/global')

module.exports = yup.string().oneOf(NOTE_TYPES_ARR)
