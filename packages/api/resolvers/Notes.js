const { Notes, Users } = require('@nbs/db')

const Note = {
    author: parent => Users.findById(parent.author),
    parent: parent => Notes.findById(parent.parent),
}

const Query = {
    note: (_, { id }) => Notes.findById(id),
    notes: () => Notes.find(),
}

const Mutation = {
    addNote: (_, { author, kind, note }) => Notes.create({ author, kind, ...note }),
    editNote: (_, { id, note }) => Notes.findByIdAndUpdate(id, note),
    deleteNote: async (_, { id }) => {
        await Notes.findByIdAndDelete(id)
        return true
    },
}

module.exports = {
    Note,
    Query,
    Mutation,
}
