const express = require('express');

const router = express.Router();

const registerController = require('../Controllers/registerController');

const { validarRegistro } = require('../Middlewares/registerMiddlewares');

router.post('/', validarRegistro, registerController.registerUser);

module.exports = router;
