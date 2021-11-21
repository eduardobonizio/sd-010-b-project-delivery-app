const express = require('express');
const auth = require('registry-auth-token');

const customerRouter = express.Router();

customerRouter.get('/products');

customerRouter.post('/checkout', async (req, res) => {
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
