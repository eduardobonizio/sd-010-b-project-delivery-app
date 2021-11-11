const express = require('express');

const router = express.Router();

const loginController = require('../Controllers/loginController');

const { validarLogin } = require('../Middlewares/loginMiddlewares');

router.post('/', validarLogin, loginController.loginUser);

router.post('/login', () => loginController.login);


module.exports = router;
