const { Sale, SalesProduct } = require('../../database/models');

const getUserOrders = async (userId) => {
  try {
    const userOrders = await Sale.findAll({ where: { userId } });
    return userOrders;
  } catch (e) {
    console.log(e);
  }
};

const getSaleInfo = async (saleId) => {
  const saleInfo = await Sale.findByPk(saleId);
  return saleInfo;
};

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
  getUserOrders,
  getSaleInfo,
  create,
};
