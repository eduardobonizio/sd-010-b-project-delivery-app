const router = require('express').Router();
const salesProductsController = require('../controllers/salesProducts');

router.post('/salesProducts', salesProductsController.createSalesProducts);

module.exports = router;