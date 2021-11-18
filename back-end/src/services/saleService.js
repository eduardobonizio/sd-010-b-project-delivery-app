const { sale } = require('../database/models');

const getAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

const postSale = async (body) => {
  const { id } = await sale.create(body);
  return id;
};

module.exports = {
  getAll,
  postSale,
};
