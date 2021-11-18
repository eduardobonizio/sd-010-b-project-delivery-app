const express = require('express');
const rescue = require('express-rescue');
const { getProducts } = require('../services/products');

const productRouter = express.Router();

productRouter.get('/products', rescue(async (req, res) => {
  const products = await getProducts();

  return res.status(200).json(products);
}));

module.exports = { productRouter };
