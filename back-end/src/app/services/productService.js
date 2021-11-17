const { Product } = require('../../database/models');

const findAll = async () => {
  const findAllProducts = await Product.findAll();
  return findAllProducts;
};

module.exports = {
  findAll,
};
