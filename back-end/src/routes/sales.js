const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', salesController.getSales);
router.post('/', salesController.postSale);
router.post('/products', salesController.postProductSale);

module.exports = router;