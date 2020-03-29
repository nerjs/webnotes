const yup = require('yup')

module.exports = yup.object().shape({
    created: yup.bool(),
    updated: yup.bool(),
})
