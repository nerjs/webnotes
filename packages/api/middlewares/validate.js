const { validateMiddleware } = require('@nerjs/gql/mdw')
const { notesInput, notesInputQuery, strictNotesInput } = require('@nbs/validate')

console.log(validateMiddleware)

const Query = {
    notes: validateMiddleware({ query: notesInputQuery }),
}

const Mutation = {
    addNote: validateMiddleware(strictNotesInput),
    editNote: validateMiddleware({ note: notesInput }),
}

module.exports = {
    Query,
    Mutation,
}
