const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession)
const { connection } = require('@nbs/db')
const { SESSION_MAX_AGE } = require('@nbs/global')

class ModifyMongoStore extends MongoStore {
    getSessionByUserId(userId) {
        return new Promise((resolve, reject) => {
            if (!userId) return resolve([])
            this.collection.find({ 'session.userId': userId }).toArray((err, res) => {
                if (err) return reject(err)
                resolve(res)
            })
        })
    }
}

const store = new ModifyMongoStore({
    mongooseConnection: connection,
    collection: 'collSession',
    stringify: false,
})

exports = module.exports = expressSession({
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: SESSION_MAX_AGE,
        name: 'connect.sid',
    },
    resave: false,
    rolling: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    // unset: 'keep',
    store: store,
})

exports.store = store
