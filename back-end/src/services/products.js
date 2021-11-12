const Products = require('../models/products');

const getById = async ({ id }) => {
  try {
    const product = await Products.getById(id);

    return product;
  } catch (error) {
    console.log(error);
    return { message: 'No Content', code: 204 };
  }
};

module.exports = {
  getAll: Products.getAll,
  getById,
};
