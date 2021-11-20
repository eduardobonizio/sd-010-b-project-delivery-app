const { Sale, Product } = require('../database/models');

const getSaleProduct = async (id) => {
  const saleWithProduct = await Sale.findAll({
    where: { id },
    include: [{ model: Product,
    as: 'products',
    through: {
      attributes: ['quantity'],
    } }] }).catch((e) => console.log(e));
    if (saleWithProduct.length === 0) {
      return null;
    } return saleWithProduct;
};

module.exports = {
  getSaleProduct,
};