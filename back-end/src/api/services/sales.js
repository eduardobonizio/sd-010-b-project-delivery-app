const { Sale } = require('../../database/models');

const getAllSalesById = async (id) => {
  const result = await Sale.findAll(
    { where: { userId: id } },
    );
  return result; 
};

module.exports = {
  getAllSalesById,
};