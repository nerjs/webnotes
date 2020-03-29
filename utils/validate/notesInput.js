const yup = require('yup')

module.exports = yup.object().shape({
    title: yup.string(),
    text: yup.string(),
    parent: yup.string(),
    url: yup.string().url(),
    img: yup.string().url(),
})
