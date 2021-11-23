const express = require('express');
const { createSale, getOrderBySellerId } = require('../controllers/saleController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .post('/', createSale)
  .get('/orders/seller/:id', getOrderBySellerId);

router.use(errorMiddleware);

module.exports = router;