const express = require('express');
const auth = require('../middlewares/auth');

const customerRouter = express.Router();

customerRouter.get('/products');

customerRouter.post('/checkout', auth, async (req, res) => {
  const { token, totalPrice, products, address, adressNumber } = req.body;
  console.log(token, totalPrice, products, address, adressNumber);
  console.log('Retorna o id do pedido que foi criado no banco de dados');
  return res.status(200).send({ message: 'under construction' });
});

customerRouter.get('/orders');

customerRouter.post('/order/:id', auth, async (req, res) => {
  console.log('Rota para retorno de uma ordem de compra');
  return res.status(200).send({ message: 'under construction' });
});

module.exports = {
  customerRouter,
};
