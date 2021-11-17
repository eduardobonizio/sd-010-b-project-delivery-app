const { Sale } = require('../../database/models');

const getAll = async () => {
  try {
  const findCustomer = await Sale.findAll();
  console.log(findCustomer);
  return findCustomer;
} catch (error) {
  console.log(error);
}
};
const getById = async (id) => {
  const findId = await Sale.findByPk(id);
  return findId;
};

module.exports = {
  getAll,
  getById,
};