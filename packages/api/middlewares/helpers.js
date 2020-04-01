const onlyId = require('@nerjs/gql/mdw/onlyId')
const notNull = require('@nerjs/gql/mdw/notNull')
const returnBoolean = require('@nerjs/gql/mdw/returnBoolean')

const Note = {
    author: onlyId(),
    parent: onlyId(),
}

const Mutation = {
    addNote: notNull('Note not found'),
    editNote: notNull('Note not found'),
    deleteNote: returnBoolean(),
    addUser: notNull('User not found'),
    editUser: notNull('User not found'),
    deleteUser: returnBoolean(),
}

module.exports = {
    Note,
    Mutation,
}
