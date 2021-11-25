const express = require('express');

const router = express.Router();

const productsController = require('../Controllers/productsController');
const { validToken } = require('../Middlewares/validarTokenMiddlewares');

router.get('/', validToken, productsController.getAllProducts);

module.exports = router;