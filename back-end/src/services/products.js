const Product = require('../database/models');

const create = async (product) => {
  try {
    return await Product.create(product);
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
};
