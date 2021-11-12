const express = require('express');
const productRouter = require('../controllers/productController');

const router = express.Router();

router.route('/')
  .get(productRouter.getAllProducts);

module.exports = router;
