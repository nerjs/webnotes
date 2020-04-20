const yup = require('yup')
const { NOTE_TYPES } = require('@nbs/global')

const core = yup.object().shape({
    title: yup.string().min(3),
    text: yup.string().min(3),
})

const dirSchema = core.concat(
    yup.object().shape({
        title: yup.string().required(),
    }),
)

const textSchema = core.concat(
    yup.object().shape({
        text: yup.string().required(),
    }),
)

const linkSchema = core.concat(
    yup.object().shape({
        url: yup
            .string()
            .url()
            .required(),
        img: yup.string().url(),
    }),
)

module.exports = {
    [NOTE_TYPES.DIR]: dirSchema,
    [NOTE_TYPES.TEXT]: textSchema,
    [NOTE_TYPES.LINK]: linkSchema,
}
