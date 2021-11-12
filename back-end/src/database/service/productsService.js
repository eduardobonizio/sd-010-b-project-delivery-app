const { product } = require('../models');

const getAllProducts = async (_req, res) => {
  const getProducts = await product.findAll();
  console.log(getProducts);
  return getProducts;
};

module.exports = { getAllProducts };
