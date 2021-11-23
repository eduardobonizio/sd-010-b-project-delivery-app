const express = require('express');
const auth = require('../middlewares/auth');
const { createNewSale, getOrders } = require('../services/saleService');
const { getOrderByPk } = require('../services/saleService');

const customerRouter = express.Router();

customerRouter.get('/products');

customerRouter.post('/checkout', auth, async (req, res) => {
  try {
    const { body } = req;

    const { id } = await createNewSale(body);

    return res.status(201).send({ saleId: id });
  } catch (error) {
    console.log(error);
  }
});

customerRouter.get('/orders/:id', auth, getOrderByPk);

customerRouter.post('/orders/:id', auth, async (req, res) => {
  console.log('Rota para retorno de uma ordem de compra');
  return res.status(200).send({ message: 'under construction' });
});

customerRouter.get('/orders', auth, async (req, res) => {
  console('/order');
  const { user } = req.body;
  const orders = await getOrders(user.id);
  if (orders) return res.status(200).json(orders);
  return res.status(404).json({ message: 'No orders found' });
});

module.exports = {
  customerRouter,
};
