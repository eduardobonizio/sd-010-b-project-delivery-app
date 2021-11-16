const { sale, salesProducts } = require('../../database/models');

const getSalesByIdSeller = async ({ id }) => {
  const salesFounded = await sale.findAll({ where: { sellerId: id } });
  if (salesFounded.length === 0) {
    return { message: 'Vendas não encontradas para esta pessoa vendedora' };
  }
  return salesFounded;
};

const getSalesByIdUser = async ({ id }) => {
  const salesFounded = await sale.findAll({ where: { userId: id } });
  if (salesFounded.length === 0) {
    return { message: 'Vendas não encontradas para esta pessoa vendedora' };
  }
  return salesFounded;
};

const setStatusSale = async ({ id, status }) => {
  const saleUpdated = await sale.update({ status }, { where: { id } });
 
  if (saleUpdated[0] === 0) {
    return { message: 'Dados inválidos' };
  }
  return saleUpdated;
};

const createSale = async (body) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = body;
  const newSale = await sale.create(
    {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: Date.now(),
      status: 'Pendente',
    },
  );
  
  products.forEach(async ({ id, quantity }) => {
    await salesProducts.create({ saleId: newSale.id, productId: id, quantity });
  });

  return newSale;
};

module.exports = {
  createSale,
  getSalesByIdSeller, 
  setStatusSale,
  getSalesByIdUser,
};
