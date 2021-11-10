const router = require('express').Router()
const loginController = require('../controllers/login');

router.get('/', loginController.login)
router.get('/login', loginController.login2)

module.exports = router;