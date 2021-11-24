const { sales } = require('../database/models');

const getAll = async () => {
 
  const allSales = await sales.findAll();
 
  return allSales;
};

const getById = async (id) => {
  const sale = await sales.findByPk(id);

  return sale;
};

const createSales = async (payload) => {

  const result = await sales.create(payload);
  return result;
}

module.exports = {
  getAll,
  getById,
  createSales,
};
