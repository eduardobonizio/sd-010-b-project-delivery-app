const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.route('/sales')
  .get(saleController.getSalesByIdSeller);

module.exports = router;