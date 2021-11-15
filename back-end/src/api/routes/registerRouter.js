const router = require('express').Router();
const rescue = require('express-rescue');

const { registerController } = require('../../controllers');

router.post('/', rescue(registerController.createUser));

module.exports = router;
