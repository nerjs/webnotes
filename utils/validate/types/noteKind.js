const yup = require('yup')
const { NOTE_TYPES_ARR } = require('@nbs/global')

module.exports = yup.string().oneOf(NOTE_TYPES_ARR)
