const yup = require('yup')
const noteKind = require('./types/noteKind')
const objectId = require('./types/objectId')

module.exports = yup.object().shape({
    owner: objectId.required(),
    root: yup.bool(),
    parent: objectId.when('root', {
        is: true,
        then: () => objectId,
        otherwise: () => objectId.required(),
    }),
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
