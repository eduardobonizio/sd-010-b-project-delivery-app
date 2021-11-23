const { sales } = require('../database/models');

const getAll = async () => {
  const allSales = await sales.findAll();
  console.log('--------------------------------->');
  console.log(allSales);
  return allSales;
};

const getById = async (id) => {
  console.log('--------------------------------->');
  console.log(id);
  const sale = await sales.findByPk(id);

  return sale;
};

module.exports = {
  getAll,
  getById,
};
