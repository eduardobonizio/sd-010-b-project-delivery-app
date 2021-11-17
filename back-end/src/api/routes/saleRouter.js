const express = require('express');

const router = express.Router();
const { getUserOrders, getSaleInfo } = require('../controllers/saleController');

router.route('/user').get(getUserOrders);
router.route('/:id').get(getSaleInfo);

module.exports = router;
