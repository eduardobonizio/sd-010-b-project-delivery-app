const express = require('express');
const { createSale } = require('../controllers/saleController');
const errorMiddleware = require('../middlewares/error');

const router = express.Router();

router
  .post('/', createSale);

router.use(errorMiddleware);

module.exports = router;