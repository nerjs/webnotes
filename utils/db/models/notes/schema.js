const {
    Schema,
    Types: { ObjectId },
} = require('mongoose')
const { NOTE_TYPES_ARR } = require('@webnotes/global')

module.exports = new Schema(
    {
        kind: {
            type: String,
            enum: NOTE_TYPES_ARR,
            required: true,
        },
        title: String,
        text: String,
        owner: {
            type: ObjectId,
            required: true,
            ref: 'User',
        },
        parent: {
            type: ObjectId,
            ref: 'Notes',
        },
        source: {
            type: ObjectId,
            ref: 'Notes',
        },
    },
    { timestamps: true, discriminatorKey: 'kind' },
)
