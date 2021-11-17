const express = require('express');
const productsController = require('../controllers/productController');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/products', productsController.getProducts);
router.get('/sales', salesController.getSales);
router.post('/orders', salesController.postSale);

module.exports = router;