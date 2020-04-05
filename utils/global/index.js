exports.NOTE_TYPES = {
    DIR: 'dir',
    TEXT: 'text',
    LINK: 'link',
}

exports.NOTE_TYPES_ARR = Object.keys(exports.NOTE_TYPES).map(key => exports.NOTE_TYPES[key])

exports.USER_SETTINGS = {
    MIN_LOGIN: 3,
    MAX_LOGIN: 20,
    MATCH_LOGIN: /^[a-z0-9_-]*$/,
    MIN_PASSWORD: 6,
    MAX_PASSWORD: 50,
    MATCH_PASSWORD: /^[a-zA-Z0-9_-]*$/,
}

exports.SESSION_MAX_AGE = 1000 * 60 * 60
