const yup = require('yup')
const noteKind = require('./types/noteKind')
const objectId = require('./types/objectId')

module.exports = yup.object().shape({
    parent: objectId,
    author: objectId,
    kind: noteKind,
    skip: yup
        .number()
        .min(0)
        .integer(),
    limit: yup
        .number()
        .positive()
        .integer(),
})
