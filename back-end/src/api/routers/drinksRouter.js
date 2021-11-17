const { Router } = require('express');

const nameValidate = require('../middlewares/nameValidate');
const emailValidate = require('../middlewares/emailValidate');
const passwordValidate = require('../middlewares/passwordValidate');
const { loginController } = require('../controllers/loginController');
const { registerController } = require('../controllers/registerController');

const router = Router();

router.post('/login', emailValidate, passwordValidate, loginController);
router.post('/register', emailValidate, passwordValidate, nameValidate, registerController);

module.exports = router;
