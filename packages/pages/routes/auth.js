const { Router } = require('express')
const { ROUTES } = require('@webnotes/global')

const router = new Router()

const createMdw = obj => (req, res) => res.clientTemplate(obj)

router.get(`/${ROUTES.PATHNAME_AUTH_LOGIN}`, createMdw({ title: 'Login' }))
router.get(`/${ROUTES.PATHNAME_AUTH_REGISTRATION}`, createMdw({ title: 'Registration ' }))
router.get(`/${ROUTES.PATHNAME_AUTH_LOGOUT}`, createMdw({ title: 'Logout' }))

module.exports = router
