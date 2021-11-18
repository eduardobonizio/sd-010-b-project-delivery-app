const { Product } = require('../database/models');

const hasProductById = async (productsId) => {
  const category = await Product.findByPk(productsId);
  if (!category) return false;

  return true;
};

const getProducts = async () => {
  const result = await Product.findAll();
  if (!result) return false;
  return result;
};

module.exports = {
  hasProductById,
  getProducts,
};