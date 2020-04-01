const onlyId = require('@nerjs/gql/mdw/onlyId')
const notNull = require('@nerjs/gql/mdw/notNull')

const Note = {
    author: onlyId(),
    parent: onlyId(),
}

const Mutation = {
    addNote: notNull('Note not found'),
    editNote: notNull('Note not found'),
    addUser: notNull('User not found'),
    editUser: notNull('User not found'),
}

module.exports = {
    Note,
    Mutation,
}
