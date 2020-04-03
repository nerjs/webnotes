const expressSession = require('express-session')

const MAX_AGE = 1000 * 60

module.exports = expressSession({
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: MAX_AGE,
        name: 'connect.sid',
        path: '/',
    },
    resave: false,
    // // rolling: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    // unset: 'keep',
    // store: expressSession.MemoryStore({}),
})
