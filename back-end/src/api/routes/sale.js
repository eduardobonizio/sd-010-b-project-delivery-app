const express = require('express');

const router = express.Router();

const saleController = require('../Controllers/saleController');

const { validToken } = require('../Middlewares/validarTokenMiddlewares');

router.get('/:id', saleController.getSalesById);
router.get('/', validToken, saleController.getAllSales);

module.exports = router;
