const { User, Types } = require('@webnotes/db')
const { ROUTES } = require('@webnotes/global')
const logger = require('nlogs')(module)
const HttpError = require('@nerjs/errors/HttpError')

module.exports = async (req, res, next) => {
    const { userId, userName } = req.params

    if (!userId && !userName) return next(new HttpError(406))

    if (userId) {
        try {
            Types.ObjectId(userId)
        } catch (e) {
            logger.error(e)
            return next(new HttpError(406))
        }
    }

    let user

    try {
        user = await (userId ? User.findById(userId) : User.findOne({ login: userName })).select(
            'login updatedAt',
        )
    } catch (e) {
        logger.error(e)
        next(new HttpError(500))
    }

    if (!user) return next(new HttpError(404, 'User not found!'))

    res.clientTemplate({
        title: `User: ${user.login || user.id}`,
        description: `WebNotes | User: ${user.login || user.id}`,
        userName: user.login || 'User',
        userUrl: `${ROUTES.PREFIX_USER_ID}${user.id}`,
        lastModified: user.updatedAt,
    })
}
