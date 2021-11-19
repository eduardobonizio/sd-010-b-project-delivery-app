const express = require('express');

const router = express.Router();

const saleController = require('../Controllers/saleController');
const { validToken } = require('../Middlewares/validarTokenMiddlewares');

router.route('/')
  .post(saleController.create)
  .get(validToken, saleController.getAllSales);

module.exports = router;
