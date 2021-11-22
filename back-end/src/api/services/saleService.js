const { Sale, SalesProduct, Product } = require('../../database/models');

const getUserOrders = async (userId, role) => {
  try {
    let userOrders = [];
    if (role === 'seller') {
      userOrders = await Sale.findAll({
        where: { sellerId: userId },
      });
    } else userOrders = await Sale.findAll({ where: { userId } });
    return userOrders;
  } catch (e) {
    console.log(e);
  }
};

const getSale = async (saleId) => {
  const saleInfo = await Sale.findByPk(saleId);
  return saleInfo;
};

const createSale = async (saleData) => {
  const { cart } = saleData;

  const sale = await Sale.create({
    userId: saleData.userId,
    deliveryAddress: saleData.deliveryAddress,
    deliveryNumber: saleData.deliveryNumber,
    sellerId: saleData.sellerId,
    totalPrice: saleData.totalPrice,
    status: 'Pendente',
  });

  cart.forEach(async (product) => {
    await SalesProduct.create({
      saleId: sale.id,
      productId: product.id,
      quantity: product.qty,
    });
  });

  return sale;
};

const getSaleInfo = async (saleId) => {
  const productsInfo = await Sale.findOne({
    where: { id: saleId },
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  const seller = await productsInfo.getSeller();
  return { productsInfo, seller };
};

const updateSaleStatus = async (id, status) => {
  const sale = await Sale.update({ status }, { where: { id } });
  return sale;
};

module.exports = {
  getUserOrders,
  getSale,
  createSale,
  updateSaleStatus,
  getSaleInfo,
};
