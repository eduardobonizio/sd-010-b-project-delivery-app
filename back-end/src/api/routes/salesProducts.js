const router = require('express').Router();
const salesProductsController = require('../controllers/salesProducts');

router.get('/checkout', salesProductsController.getAll);
router.get('//customer/orders:id', salesProductsController.getAllByUserId);

module.exports = router;