const yup = require('yup')
const { USER_SETTINGS } = require('@nbs/global')

const loginField = yup
    .string()
    .min(USER_SETTINGS.MIN_LOGIN)
    .max(USER_SETTINGS.MAX_LOGIN)
    .matches(USER_SETTINGS.MATCH_LOGIN)

const login = yup.object().shape({
    login: loginField,
    password: yup
        .string()
        .min(USER_SETTINGS.MIN_PASSWORD)
        .max(USER_SETTINGS.MAX_PASSWORD)
        .matches(USER_SETTINGS.MATCH_PASSWORD),
})

const registration = login.concat(
    yup.object().shape({
        confirmPassword: yup.string().test('match', 'Passwords do not match', function() {
            return this.parent.password == this.parent.confirmPassword
        }),
    }),
)

exports.loginField = loginField
exports.login = login
exports.registration = registration
