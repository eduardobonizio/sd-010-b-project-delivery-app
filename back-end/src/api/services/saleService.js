const { sale, salesProducts } = require('../../database/models');

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
};
