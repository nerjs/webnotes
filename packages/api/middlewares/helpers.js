const onlyId = require('@nerjs/gql/mdw/onlyId')
const notNull = require('@nerjs/gql/mdw/notNull')
const combine = require('@nerjs/gql/mdw/combine')
const returnBoolean = require('@nerjs/gql/mdw/returnBoolean')

const Note = {
    owner: combine(notNull('Owner not found!'), onlyId()),
    parent: onlyId(),
    source: onlyId(),
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
