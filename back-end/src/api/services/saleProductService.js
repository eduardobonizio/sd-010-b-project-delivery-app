const { sale, product } = require('../../database/models');

const getSalesByIdSale = async ({ id }) => {
  const salesFounded = await sale.findAll(
    { where: { id },
      include: [{ model: product, as: 'sales', through: { attributes: [] } }],
    },
  );
  
  if (salesFounded.length === 0) {
    return { message: 'Vendas e Produtos não encontrados' };
  }
  return salesFounded;
};

module.exports = { getSalesByIdSale };