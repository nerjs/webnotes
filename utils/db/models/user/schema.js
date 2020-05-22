const { Schema } = require('mongoose')
const { USER_SETTINGS } = require('@webnotes/global')

const schema = new Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true,
            index: true,
            minlength: USER_SETTINGS.MIN_LOGIN,
            maxlength: USER_SETTINGS.MAX_LOGIN,
            match: USER_SETTINGS.MATCH_LOGIN,
        },
        __hashedPassword: {
            type: String,
            required: true,
            // minlength: USER_SETTINGS.MIN_PASSWORD,
            // maxlength: USER_SETTINGS.MAX_PASSWORD,
            // match: USER_SETTINGS.MATCH_PASSWORD,
        },
        __documentSalt: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
)

;['toObject', 'toJSON'].forEach(key =>
    schema.set(key, {
        virtuals: false,
        getters: false,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret.__documentSalt
            delete ret.__hashedPassword
            ret.id = ret._id
            return ret
        },
    }),
)

module.exports = schema
