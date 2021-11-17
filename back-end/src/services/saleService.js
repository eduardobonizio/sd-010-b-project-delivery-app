const { sale } = require('../database/models');

const getAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

module.exports = {
  getAll,
};
