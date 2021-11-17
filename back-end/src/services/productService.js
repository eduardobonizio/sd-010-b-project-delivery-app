const { Product } = require('../database/models');

const hasProductById = async (productsId) => {
  const category = await Product.findByPk(productsId);
  if (!category) return false;

  return true;
};

module.exports = {
  hasProductById,
};