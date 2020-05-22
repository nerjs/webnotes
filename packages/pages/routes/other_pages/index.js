const { Router } = require('express')
const { ROUTES } = require('@webnotes/global')
const badBrowserRoute = require('./bad_browser')

const router = new Router()

router.get(`/${ROUTES.PATHNAME_BADBROWSER}`, badBrowserRoute)

module.exports = router
