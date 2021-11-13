const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

router.route('/')
  .post(saleController.createSale);

module.exports = router;
