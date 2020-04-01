const onlyId = require('@nerjs/gql/mdw/onlyId')
const notNull = require('@nerjs/gql/mdw/notNull')

const resolveReturnTrue = preventError => async (resolver, ...args) => {
    try {
        await resolver(...args)
        return true
    } catch (e) {
        if (preventError) return false
        throw e
    }
}

const Note = {
    author: onlyId(),
    parent: onlyId(),
}

const Mutation = {
    addNote: notNull('Note not found'),
    editNote: notNull('Note not found'),
    deleteNote: resolveReturnTrue(),
    addUser: notNull('User not found'),
    editUser: notNull('User not found'),
    deleteUser: resolveReturnTrue(),
}

module.exports = {
    Note,
    Mutation,
}
