const express = require('express');
const errorMiddleware = require('../middlewares/error');
const { getProducts } = require('../controllers/productController');

const router = express.Router();

router
  .get('/products', getProducts);

router.use(errorMiddleware);

module.exports = router;