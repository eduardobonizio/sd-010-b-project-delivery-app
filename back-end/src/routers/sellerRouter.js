const express = require('express');

const sellerRouter = express.Router();

sellerRouter.get('/orders');

sellerRouter.post('/order/:id');

module.exports = {
  sellerRouter,
};