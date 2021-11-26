const router = require('express').Router();
const salesProductsController = require('../controllers/salesProducts');

router.post('/salesProducts', salesProductsController.createSalesProducts);
router.get('/salesProducts', salesProductsController.getAllSalesProductsBySeleId);

module.exports = router;