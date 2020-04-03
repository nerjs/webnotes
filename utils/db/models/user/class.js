const crypto = require('crypto')

const hash = (...args) =>
    crypto
        .createHash('sha256')
        .update(args.map(s => `${s}`).join(':'))
        .digest('hex')

class UserDb {
    __documentSalt = 'ff'

    get password() {
        return this.__hashedPassword
    }

    set password(pass) {
        this.__documentSalt = `${Math.random()}.${Date.now()}`.substr(2)
        this.__hashedPassword = this.hashPassword(pass)
    }

    checkPassword(pass) {
        return this.password === this.hashPassword(pass)
    }

    hashPassword(pass) {
        return hash(
            process.env.PASSWORD_SALT,
            hash(this.__documentSalt, pass, process.env.PASSWORD_SALT),
            this.__documentSalt,
        )
    }
}

module.exports = UserDb
