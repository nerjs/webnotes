const yup = require('yup')
const { USER_SETTINGS } = require('@nbs/global')

const login = yup.object().shape({
    login: yup
        .string()
        .min(USER_SETTINGS.MIN_LOGIN)
        .max(USER_SETTINGS.MAX_LOGIN)
        .matches(USER_SETTINGS.MATCH_LOGIN),
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

exports.login = login
exports.registration = registration
