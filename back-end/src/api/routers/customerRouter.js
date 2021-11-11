const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.route('/products')
  .get(customerController.getAllProducts);

module.exports = router;
