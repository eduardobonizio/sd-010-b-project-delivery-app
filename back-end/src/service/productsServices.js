const { Product } = require('../database/models');

const getAllProductsService = async () => {
  const products = await Product.findAll();
  // return products;
  return products.map((product) => product.dataValues);
};

module.exports = { getAllProductsService };