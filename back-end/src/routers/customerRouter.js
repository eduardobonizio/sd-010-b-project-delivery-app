const express = require('express');
const auth = require('../middlewares/auth');
const { createNewSale, getOrders } = require('../services/saleService');
const { getOrderByPk } = require('../controllers/saleController');

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

customerRouter.get('/order/:id', auth, getOrderByPk);

customerRouter.get('/order', auth, async (req, res) => {
  const { user } = req.body;
  const orders = await getOrders(user.id);
  if (orders) return res.status(200).json(orders);
  return res.status(404).json({ message: 'No orders found' });
});

module.exports = {
  customerRouter,
};
