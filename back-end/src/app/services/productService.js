const { Product } = require('../../database/models');

const messageError = (status, message) => ({
  status,
  message,
});

const findAll = async () => {
  const findAllProduct = await Product.findAll();

  return findAllProduct;
};

const findById = async (id) => {
  const findIdProduct = await Product.findByPk(id);

  if (!findIdProduct) throw messageError(404, '404 - non-existent user');

  return findIdProduct;
};

module.exports = {
  findAll,
  findById,
};
