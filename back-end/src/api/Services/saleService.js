const { sale } = require('../../database/models');

const getAllSales = async (id) => {
  const query = { where: { id } };

  const allSales = await sale.findAll(query);
  // if (allSales.length === 0) return { message: 'No momento você não possui compras' };

  return allSales;
};

const getSalesById = async (id) => {
  console.log(id, 'service');
  const saleById = await sale.findOne({
    where: { id }
  })

  return saleById;
}

module.exports = {
  getAllSales,
  getSalesById,
};