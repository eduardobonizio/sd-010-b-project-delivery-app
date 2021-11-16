const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.route('/sales/:id')
  .get(saleController.getSalesByIdSeller);

router.route('/sales-user/:id')
.get(saleController.getSalesByIdUser);

router.route('/sales/:id')
  .patch(saleController.setStatusSale);

router.route('/')
  .post(saleController.createSale);

module.exports = router;
