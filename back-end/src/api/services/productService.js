const { Product } = require('../../database/models');

const getAllProductsService = async () => {
  const userData = await Product.findAll();  
  
  return userData;
};

module.exports = {
  getAllProductsService,
};
