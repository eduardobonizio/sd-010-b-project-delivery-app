const router = require('express').Router();
const rescue = require('express-rescue');

const { userController } = require('../../controllers');

router.post('/create', rescue(userController.createUser));
router.post('/login', rescue(userController.login));

module.exports = router;
