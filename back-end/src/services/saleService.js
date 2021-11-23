const { Sale, SalesProduct } = require('../models');

const insertIntoSalesProduct = async (products, saleId) => {
  await products.forEach(async (product) => {
    await SalesProduct.create({
      saleId,
      productId: product.id,
      quantity: product.quantity,
    });
  });
};

const createNewSale = async (body) => {
  const { products, user, totalPrice, deliveryAddress, deliveryNumber, sellerId } = body;
  const newSale = await Sale.create({
    userId: user.id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
    sellerId,
  });

  await insertIntoSalesProduct(products, newSale.id);

  return newSale;
};

const getOrders = async (userId) => {
  try {
    const orders = await Sale.findAll({ where: { userId } });
    return orders;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getOrderByPk = async (userId, id) => {
  try {
    const order = await Sale.findByPk(id, { where: { userId } });
    return order;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  createNewSale,
  getOrders,
  getOrderByPk,
};
