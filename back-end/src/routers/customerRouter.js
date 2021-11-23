const express = require('express');
const auth = require('../middlewares/auth');
const { createNewSale } = require('../services/saleService');

const customerRouter = express.Router();

customerRouter.get('/products');

customerRouter.post('/checkout', auth, async (req, res) => {
  const { body } = req;

  const newSale = await createNewSale(body);

  // console.log('newSale', newSale);

  return res.status(200).send(newSale);
});

customerRouter.get('/orders');

customerRouter.post('/order/:id', auth, async (req, res) => {
  console.log('Rota para retorno de uma ordem de compra');
  return res.status(200).send({ message: 'under construction' });
});

module.exports = {
  customerRouter,
};
