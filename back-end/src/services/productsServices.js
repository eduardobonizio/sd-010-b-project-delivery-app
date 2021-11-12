const { Product } = require('../database/models');

const getAllProductsService = async () => {
  const products = await Product.findAll();
  console.log(Product, 'ba', products);
  return products;
};

module.exports = { getAllProductsService };