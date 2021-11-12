const express = require('express');
const validateJWT = require('../middleware/validateJWT');
const { getAllOrdersBySellerId, getOrderById } = require('../controllers/orderController');

const router = express.Router();

router.get('/orders', validateJWT, getAllOrdersBySellerId );
router.get('/orders/details/:id', validateJWT, getOrderById);

module.exports = router;
