const { product } = require('../../database/models');

const getAllProducts = async () => product.findAll();

module.exports = {
  getAllProducts,
};
