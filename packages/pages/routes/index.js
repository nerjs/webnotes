const { Router } = require('express')
const { ROUTES } = require('@webnotes/global')
const homeRoute = require('./home')
const errorRoute = require('./error')
const userRoute = require('./user')
const notesRoute = require('./notes')
const authRoute = require('./auth')
const pRoute = require('./other_pages')

const router = new Router()

router.get('/__errors/:errorCode', errorRoute)

router.get([ROUTES.PATH_USER_ID, ROUTES.PATH_USER_NAME], userRoute)
router.get(ROUTES.PATH_NOTE_ID, notesRoute)
router.use(ROUTES.PREFIX_PAGE, pRoute)
router.use(ROUTES.PREFIX_AUTH, authRoute)
router.get('/', homeRoute)

module.exports = router
