const { Users } = require('@nbs/db')

const Query = {
    user: (_, { id }) => Users.findById(id),
    users: () => Users.find(),
}

const Mutation = {
    addUser: (_, { user }) => Users.create(user),
    editUser: (_, { id, user }) => Users.findByIdAndUpdate(id, user, { new: true }),
    deleteUser: (_, { id }) => Users.findByIdAndDelete(id),
}

module.exports = {
    Query,
    Mutation,
}
