const { products } = require('../database/models');

const getAll = async () => {
  const allProducts = await products.findAll();

  return allProducts;
};

const getById = async (id) => {
  const product = await products.findByPk(id);

  return product;
};

module.exports = {
  getAll,
  getById,
};
