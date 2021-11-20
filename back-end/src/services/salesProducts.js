const { Sale, User, SaleProduct, Product } = require('../database/models');

const getSaleProduct = async (id) => {
  const saleWithProduct = await Sale.findAll({ where: { id } });
  return saleWithProduct;
};

module.exports = {
  getSaleProduct,
};