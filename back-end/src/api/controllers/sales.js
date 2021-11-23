const rescue = require('express-rescue');
// const { Sale } = require('../../database/models');
const saleService = require('../services/sales');
const { getUserByToken } = require('../middlewares/validateToken');

const sales = rescue(async (req, res) => {
  const token = req.headers.authorization;
  const { data: { id } } = getUserByToken(token);
  // console.log('sou o id', id);
  const result = await saleService.getAllSalesById(id);
  if (!result) { return res.status(404).json({ message: 'deu merda corre!' }); }
  return res.status(200).json(result);
});

module.exports = {
  sales,
};
