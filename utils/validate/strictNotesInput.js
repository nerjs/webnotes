const yup = require('yup')
const { NOTE_TYPES } = require('@nbs/global')
const noteKind = require('./types/noteKind')
const objectId = require('./types/objectId')

const core = yup.object().shape({
    title: yup.string(),
    text: yup.string(),
    parent: objectId,
    author: objectId,
})

const linkSchema = core.concat(
    yup.object().shape({
        url: yup
            .string()
            .url()
            .required(),
        img: yup.string().url(),
    }),
)

const schemas = {
    [NOTE_TYPES.DIR]: core,
    [NOTE_TYPES.TEXT]: core,
    [NOTE_TYPES.LINK]: linkSchema,
}

module.exports = yup.object().shape({
    kind: noteKind.required(),
    note: core.when('kind', (kind, schema) => {
        console.log({ schema, kind })

        if (!schemas[kind]) throw new Error(`Schema [kind: ${kind}] not found!`)
        return schemas[kind]
    }),
})
