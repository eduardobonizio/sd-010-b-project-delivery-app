const express = require('express');

const customerRouter = express.Router();

customerRouter.get('/products');

customerRouter.get('/checkout');

customerRouter.get('/orders');

customerRouter.post('/order/:id');

module.exports = {
  customerRouter,
};