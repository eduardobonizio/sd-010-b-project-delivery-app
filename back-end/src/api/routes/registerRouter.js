const router = require('express').Router();
const rescue = require('express-rescue');

const { registerController } = require('../../controllers');

router.post('/register', rescue(registerController.createUser));

module.exports = router;
