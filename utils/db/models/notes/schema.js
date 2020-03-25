const { Schema } = require('mongoose')
const { NOTE_TYPES, NOTE_TYPES_ARR } = require('../../constants')

module.exports = new Schema(
    {
        title: String,
        type: {
            type: String,
            enum: NOTE_TYPES_ARR,
            required: true,
        },
        test1: {
            type: String,
            required: true,
            dep: { type: NOTE_TYPES.TYPE_T1 },
        },
        test2: {
            type: String,
            required: true,
            dep: { type: NOTE_TYPES.TYPE_T1 },
        },
        test3: {
            type: String,
            required: true,
            dep: ['type'],
        },
    },
    { timestamps: true },
)
