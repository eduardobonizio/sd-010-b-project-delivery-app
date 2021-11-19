const express = require('express');
const { create } = require('../controllers/saleController');
const { getUserOrders, getSaleInfo, getProductsOfSale } = require('../controllers/saleController');

const router = express.Router();

router.route('/').post(create);
router.route('/user').get(getUserOrders);
router.route('/:id').get(getSaleInfo);
router.route('/products/:id').get(getProductsOfSale);

module.exports = router;
