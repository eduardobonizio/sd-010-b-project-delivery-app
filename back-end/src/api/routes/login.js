const express = require('express');

const router = express.Router();

const loginController = require('../Controllers/loginController');
const { validarLogin } = require('../Middlewares/loginMiddlewares');

router.post('/', validarLogin, loginController.loginUser);

module.exports = router;
