const { sale, salesProduct, product } = require('../../database/models');

const getAllSales = async (id) => {
  const query = { where: { id } };

  const allSales = await sale.findAll(query);
  // if (allSales.length === 0) return { message: 'No momento você não possui compras' };

  return allSales;
};

const getSalesById = async (id) => {
  const saleById = await salesProduct.findOne(
    {
      include: [{
        where: { sale_id: id },
        model: sale,
        as: 'sale',
      },
      {
        model: product,
        as: 'product',
        through: { attributes: [] },
      }],
    },
  );

  return saleById;
};

module.exports = {
  getAllSales,
  getSalesById,
};