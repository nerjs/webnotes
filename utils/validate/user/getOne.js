const yup = require('yup')
const objectId = require('../types/objectId')
const { loginField } = require('../auth')

module.exports = yup.object().shape({
    id: objectId.when('login', {
        is: l => !!l,
        otherwise: objectId.required(),
    }),
    login: loginField,
})
