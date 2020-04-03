const { validateMiddleware } = require('@nerjs/gql/mdw')
const { notesInput, notesInputQuery, strictNotesInput, auth } = require('@nbs/validate')

const Query = {
    notes: validateMiddleware({ query: notesInputQuery }),
}

const Mutation = {
    registration: validateMiddleware(auth.registration),
    login: validateMiddleware(auth.login),
    addNote: validateMiddleware(strictNotesInput),
    editNote: validateMiddleware({ note: notesInput }),
}

module.exports = {
    Query,
    Mutation,
}
