const { User } = require('@nbs/db')

const Query = {
    user: (_, { id }) => User.findById(id),
    users: () => User.find(),
}

const Mutation = {
    addUser: (_, { user }) => User.create(user),
    editUser: (_, { id, user }) => User.findByIdAndUpdate(id, user, { new: true }),
    deleteUser: (_, { id }) => User.findByIdAndDelete(id),
}

module.exports = {
    Query,
    Mutation,
}
