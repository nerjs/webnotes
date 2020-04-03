const AuthGqlError = require('@nerjs/errors/AuthGqlError')
const ForbiddenGqlError = require('@nerjs/errors/ForbiddenGqlError')

const isAuth = (resolver, parent, args, ctx, info) => {
    if (ctx.session.user) return resolver(parent, args, ctx, info)
    throw new AuthGqlError()
}
const isNotAuth = (resolver, parent, args, ctx, info) => {
    if (!ctx.session.user) return resolver(parent, args, ctx, info)
    throw new ForbiddenGqlError()
}

const Mutation = {
    registration: isNotAuth,
    login: isNotAuth,
    logout: isAuth,
}

module.exports = {
    Mutation,
}
