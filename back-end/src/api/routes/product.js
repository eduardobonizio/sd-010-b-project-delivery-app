const router = require('express').Router();
const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);

module.exports = router;