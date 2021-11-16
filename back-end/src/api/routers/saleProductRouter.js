const express = require('express');
const saleProductController = require('../controllers/saleProductController');

const router = express.Router();

router.route('/sale-products/:id')
  .get(saleProductController.getSalesByIdSale);

module.exports = router;