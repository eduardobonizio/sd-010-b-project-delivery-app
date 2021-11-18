const { sale } = require('../../database/models');

const getAllSales = async (id) => {
  console.log(id);
  const query = { where: { id } };

  const allSales = await sale.findAll(query);
  if (allSales.length === 0) return { message: 'No momento você não possui compras' };

  return allSales;
};

module.exports = {
  getAllSales,
};