const express = require('express');
const { 
  getUserOrders, 
  getSaleInfo,
  getSale,
  createSale,
  updateSaleStatus,
} = require('../controllers/saleController');

const router = express.Router();

router.route('/').post(createSale);
router.route('/user').get(getUserOrders);
router.route('/:id').get(getSale).put(updateSaleStatus);

router.route('/products/:id').get(getSaleInfo);

module.exports = router;
