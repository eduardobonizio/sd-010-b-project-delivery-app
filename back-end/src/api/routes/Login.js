const router = require('express').Router();
const rescue = require('express-rescue');

const { loginController } = require('../../controllers');

router.post('/', rescue(loginController.login));

module.exports = router;
