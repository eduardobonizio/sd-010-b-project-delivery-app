const { Products } = require('../database/models');

const getAllProductsService = async () => {
  const products = await Products.findAll();
  return products;
};

module.exports = { getAllProductsService };