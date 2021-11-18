const { product } = require('../models/');
console.log(product);
const validateGetProducts = async () => {
  const getAll = await product.findAll();
  return getAll;
};

module.exports = {
  validateGetProducts,
};