const {
    Schema,
    Types: { ObjectId },
} = require('mongoose')
const { NOTE_TYPES_ARR } = require('../../constants')

module.exports = new Schema(
    {
        kind: {
            type: String,
            enum: NOTE_TYPES_ARR,
            required: true,
        },
        title: String,
        text: String,
        author: {
            type: ObjectId,
            required: true,
            ref: 'Users',
        },
        parent: {
            type: ObjectId,
            ref: 'Notes',
        },
        children: {
            type: [
                {
                    type: ObjectId,
                    ref: 'Notes',
                },
            ],
            required: true,
        },
    },
    { timestamps: true, discriminatorKey: 'kind' },
)
