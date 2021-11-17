const express = require('express');
const validateJWT = require('../middleware/validateJWT');
const { getAllOrdersBySellerId, getOrderById } = require('../controllers/orderController');
const { getAllSellers } = require('../controllers/userController');

const router = express.Router();

router.get('/orders', validateJWT, getAllOrdersBySellerId );
router.get('/orders/details/:id', validateJWT, getOrderById);
router.get('/', validateJWT, getAllSellers);

module.exports = router;
