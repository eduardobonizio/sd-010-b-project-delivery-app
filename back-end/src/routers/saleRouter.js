const express = require('express');
const { createSale, getAllSalesByCustomerId } = require('../controllers/saleController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .post('/', createSale)
  .get('/orders/customer/:id', getAllSalesByCustomerId);

router.use(errorMiddleware);

module.exports = router;