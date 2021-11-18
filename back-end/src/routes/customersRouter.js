const express = require('express');

const router = express.Router();

const customerController = require('../app/controllers/customerController');

router.route('/orders/:id')
  .get(customerController.getById);

router.route('/orders')
  .get(customerController.getAll);

module.exports = router;