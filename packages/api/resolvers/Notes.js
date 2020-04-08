const { Notes, User } = require('@nbs/db')
const objectToMongoSort = require('@nbs/utils/objectToMongoSort')

const noteSortFields = {
    created: 'createdAt',
    updated: 'updatedAt',
}

const Note = {
    owner: parent => User.findById(parent.owner),
    source: parent => Notes.findById(parent.source),
    parent: parent => Notes.findById(parent.parent),
}

const Query = {
    note: (_, { id }) => Notes.findById(id),
    notes: (_, { query: { skip = 0, limit = 10, sort, ...args } }) =>
        Notes.find(args, null, { skip, limit, ...objectToMongoSort(sort, noteSortFields) }),
}

const Mutation = {
    addNote: (_, { author, kind, note }) => Notes.create({ author, kind, ...note }),
    editNote: (_, { id, note }) => Notes.findByIdAndUpdate(id, note),
    deleteNote: (_, { id }) => Notes.findByIdAndDelete(id),
}

module.exports = {
    Note,
    Query,
    Mutation,
}
