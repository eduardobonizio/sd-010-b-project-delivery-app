const express = require('express');

const router = express.Router();

const registerController = require('../Controllers/registerController');

const { validarRegistro, existToken } = require('../Middlewares/registerMiddlewares');

router.post('/adm', existToken, validarRegistro, registerController.registerUser);
router.post('/', validarRegistro, registerController.registerUser);

module.exports = router;
