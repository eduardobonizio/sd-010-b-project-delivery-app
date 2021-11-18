const { Sale } = require('../../database/models');

const getAll = async () => {
  const findCustomer = await Sale.findAll();
  return findCustomer;
};
const getById = async (id) => {
  const findId = await Sale.findByPk(id);
  return findId;
};

module.exports = {
  getAll,
  getById,
};