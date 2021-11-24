const express = require('express');
const { Sale } = require('../models');

const sellerRouter = express.Router();
// sales
sellerRouter.get('/orders', async (req, res) => {
  const sales = await Sale.findAll({ where: {id:9}, include: ['user', 'seller', 'products'] });
  console.log(sales);
  return res.status(200).send(sales)
});

sellerRouter.post('/order/:id');

module.exports = {
  sellerRouter,
};
