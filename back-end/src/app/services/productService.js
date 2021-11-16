const { Product } = require('../../database/models');

const findAll = async () => {
  const findAllProduct = await Product.findAll();
  console.log('Entrei no Service: ', findAllProduct);

  return findAllProduct;
};

module.exports = {
  findAll,
};
