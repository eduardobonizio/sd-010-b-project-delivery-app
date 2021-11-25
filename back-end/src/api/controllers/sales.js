const rescue = require('express-rescue');
// const { Sale } = require('../../database/models');
const saleService = require('../services/sales');
const { getUserByToken } = require('../middlewares/validateToken');

const sales = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { data: { id } } = getUserByToken(token);
  const result = await saleService.getAllSalesById(id);
  if (!result) { return res.status(404).json({ message: 'Sem vendas para esse usuario' }); }
  return res.status(200).json(result);
});

const createOrder = rescue(async (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  const { id } = req.body;
  delete req.body.id;
  const result = await saleService.createOrder({
     userId: id, sellerId: 1, ...req.body, status: 'PENDENTE' });
  if (!result) { return res.status(404).json({ message: 'Erro ao criar o pedido' }); }
  return res.status(201).json(result);
});

module.exports = {
  sales,
  createOrder,
};
