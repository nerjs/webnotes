import gqlCodes from '@nerjs/errors/lib/gqlCodes'

class GqlClientError extends Error {
    constructor(message, path, _ext = {}) {
        super(message)

        const { exception, ...ext } = _ext

        this.serverData = {
            path,
            ...(exception || {}),
        }

        Object.keys(ext).forEach(key => {
            this[key] = ext[key]
        })

        this.code = ext?.code || 'CLIENT_ERROR'
    }
}

export const equalPaths = (firstPath, secondPath, recursive) => {
    if (Array.isArray(firstPath)) return equalPaths(firstPath.join('.'), secondPath, recursive)
    if (Array.isArray(secondPath)) return equalPaths(firstPath, secondPath.join('.'), recursive)

    return recursive ? firstPath.search(secondPath) === 0 : firstPath === secondPath
}

export const getError = (err, needPath, code, defaultMessage, recursive) => {
    const { message, path, extensions } =
        (err.graphQLErrors || []).find(
            gErr => equalPaths(gErr.path, needPath, recursive) && gErr?.extensions?.code === code,
        ) || new Error(defaultMessage)

    return new GqlClientError(message, path, extensions)
}

export const getValidationError = (err, path, defaultMessage) =>
    getError(err, path, gqlCodes.VALIDATION, defaultMessage, false)
