const express = require('express');
const validateJWT = require('../middleware/validateJWT');
const { getAllOrdersBySellerId, getOrderById, getAllSellers } = require('../controllers/orderController');

const router = express.Router();

router.get('/orders', validateJWT, getAllOrdersBySellerId );
router.get('/orders/details/:id', validateJWT, getOrderById);
router.get('/', validateJWT, getAllSellers);

module.exports = router;
