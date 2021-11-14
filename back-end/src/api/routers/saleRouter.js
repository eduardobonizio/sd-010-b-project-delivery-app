const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.route('/sales/:id')
  .get(saleController.getSalesByIdSeller);

router.route('/sales/:id')
  .patch(saleController.setStatusSale);

module.exports = router;