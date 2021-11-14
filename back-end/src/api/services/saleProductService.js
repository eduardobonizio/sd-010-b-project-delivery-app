const { sale, product, salesProducts, user } = require('../../database/models');

const getSalesByIdSale = async ({ id }) => {
  const saleFounded = await sale.findAll(
    { where: { id },
      include: [{ model: product, as: 'products', through: { attributes: [] } }],
    },
  );
  
  if (saleFounded.length === 0) {
    return { message: 'Vendas e Produtos não encontrados' };
  }

  const saleQuantity = await salesProducts.findAll(
    { where: { saleId: saleFounded[0].id } },
  );

  const seller = await user.findOne(
    { where: { id: saleFounded[0].sellerId } },
  );
  const saleFoundedWithQuantiy = [...saleFounded, [...saleQuantity], seller];
  return saleFoundedWithQuantiy;
};

module.exports = { getSalesByIdSale };