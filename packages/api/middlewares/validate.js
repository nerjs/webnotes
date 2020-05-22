const { validateMiddleware } = require('@nerjs/gql/mdw')
const { notesInput, notesInputQuery, strictNotesInput, auth, user } = require('@webnotes/validate')

const Query = {
    notes: validateMiddleware({ query: notesInputQuery }),
    user: validateMiddleware(user.getOne),
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
