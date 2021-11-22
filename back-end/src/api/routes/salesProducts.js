const router = require('express').Router();
const salesProductsController = require('../controllers/salesProducts');

router.get('/', salesProductsController.getAll);

module.exports = router;