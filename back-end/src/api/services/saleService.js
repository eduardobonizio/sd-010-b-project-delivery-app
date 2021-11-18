const { Sale, SalesProduct } = require('../../database/models');

const create = async (body) => {
  const { cart } = body;

  const sale = await Sale.create({
    userId: body.userId,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    sellerId: body.sellerId,
    totalPrice: body.totalPrice,
    status: 'Pendente',
  });

  cart.forEach(async (el) => {
    await SalesProduct.create({ saleId: sale.id, productId: el.id, quantity: el.qty });
  });

  return sale;
};

module.exports = {
  create,
};
