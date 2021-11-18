const express = require('express');

const router = express.Router();

const salesController = require('../Controllers/salesController');

const { validToken } = require('../Middlewares/validarTokenMiddlewares');

router.get('/', validToken, salesController.getAllSales);

module.exports = router;
