const { Types } = require('@nbs/db')
const graphqlFields = require('graphql-fields')

const isOnlyId = fieldName => async (resolver, parent, args, ctx, info) => {
    if (!parent[fieldName]) return null
    if (typeof parent[fieldName] !== 'string' && !(parent[fieldName] instanceof Types.ObjectId))
        return resolver(parent, args, ctx, info)

    const fields = Object.keys(graphqlFields(info))

    if (fields.length === 1 && fields[0] === 'id') return { id: parent[fieldName] }

    return resolver(parent, args, ctx, info)
}

const Note = {
    author: isOnlyId('author'),
    parent: isOnlyId('parent'),
}

module.exports = {
    Note,
}
