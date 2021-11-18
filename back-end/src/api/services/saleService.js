const { Sale } = require('../../database/models');

const getUserOrders = async (userId) => {
  try {
    const userOrders = await Sale.findAll({ where: userId });
    return userOrders;
  } catch (e) {
    console.log(e);
  }
};

const getSellerOrders = async (sellerId) => {
  try {
    const sellerOrders = await Sale.findAll({ where: { sellerId }});
    return sellerOrders;
  } catch (e) {
    console.log(e);
  }
};

const getSaleInfo = async (saleId) => {
  const saleInfo = await Sale.findByPk(saleId);
  return saleInfo;
};

module.exports = {
  getUserOrders,
  getSaleInfo,
  getSellerOrders,
};