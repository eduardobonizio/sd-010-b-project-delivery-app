const express = require('express');
const { 
  getUserOrders, 
  getSaleInfo,
  getProductsOfSale,
  create,
} = require('../controllers/saleController');

const router = express.Router();

router.route('/').post(create);
router.route('/user').get(getUserOrders);
router.route('/:id').get(getSaleInfo);
router.route('/products/:id').get(getProductsOfSale);

module.exports = router;
