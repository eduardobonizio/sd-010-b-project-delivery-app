const express = require('express');
const productsController = require('../controllers/productController');

const router = express.Router();

router.get('/products', productsController.getProducts);

module.exports = router;