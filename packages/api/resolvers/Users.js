const { Users } = require('@nbs/db')

const Query = {
    user: async (_, { id }) => {
        return Users.findById(id)
    },
    users: () => Users.find(),
}

const Mutation = {
    addUser: async (_, { user }) => {
        const createdUser = new Users(user)
        await createdUser.save()
        return createdUser
    },
    editUser: async (_, { id, user }) => Users.findByIdAndUpdate(id, user, { new: true }),
    deleteUser: async (_, { id }) => {
        await Users.findByIdAndDelete(id)
        return true
    },
}

module.exports = {
    Query,
    Mutation,
}
