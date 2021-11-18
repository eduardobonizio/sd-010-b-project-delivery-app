const express = require('express');

const router = express.Router();
const { getUserOrders, getSellerOrders, getSaleInfo } = require('../controllers/saleController');

router.route('/user').get(getUserOrders);
router.route('/seller').get(getSellerOrders);
router.route('/:id').get(getSaleInfo);

module.exports = router;
