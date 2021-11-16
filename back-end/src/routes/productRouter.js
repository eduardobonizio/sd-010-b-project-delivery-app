const express = require('express');

const router = express.Router();

const productController = require('../app/controllers/productController');

router.route('/')
  .get(productController.findAllProduct);

// router.route('/:id', productController.findById);

module.exports = router;
