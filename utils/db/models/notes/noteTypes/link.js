const { Schema } = require('mongoose')

module.exports = new Schema({
    url: {
        type: String,
        trim: true,
        match: /^https?:\/\/\w+\.\w+/,
        required: true,
    },
    img: {
        type: String,
        trim: true,
        match: /^https?:\/\/\w+\.\w+/,
    },
})
