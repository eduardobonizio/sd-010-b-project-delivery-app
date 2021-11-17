const express = require('express');

const router = express.Router();
const { getUserOrders } = require('../controllers/saleController');

router.route('/user').get(getUserOrders);

module.exports = router;
