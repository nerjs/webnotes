const { Notes, Types } = require('@webnotes/db')
const { ROUTES } = require('@webnotes/global')
const logger = require('nlogs')(module)
const HttpError = require('@nerjs/errors/HttpError')

module.exports = async (req, res, next) => {
    const { noteId } = req.params

    if (!noteId) return next(new HttpError(406))

    try {
        Types.ObjectId(noteId)
    } catch (e) {
        logger.error(e)
        return next(new HttpError(406))
    }

    let note

    try {
        note = await Notes.findById(noteId)
            .select('title updatedAt')
            .populate({ path: 'owner', select: 'login' })
    } catch (e) {
        logger.error(e)
        next(new HttpError(500))
    }

    if (!note) return next(new HttpError(404, 'Note not found!'))

    const ownerId = note && note.owner && note.owner.id

    res.clientTemplate({
        title: `${(ownerId && note.owner.login) || 'Note'} | ${note.title || note.id}`,
        description: `WebNotes | ${(ownerId && note.owner.login) || 'Note'} | ${note.title ||
            note.id}`,
        userName: (ownerId && note.owner.login) || 'Owner',
        userUrl: `${ROUTES.PREFIX_USER_ID}${ownerId}`,
        noteTitle: note.title || 'Note',
        noteUrl: `${ROUTES.PREFIX_NOTE_ID}${noteId}`,
        lastModified: note.updatedAt,
    })
}
