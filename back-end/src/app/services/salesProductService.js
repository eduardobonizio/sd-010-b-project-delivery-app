const { SalesProduct, Product } = require('../../database/models');

const findById = async (id) => {
  try {
    const result = await SalesProduct.findAll({ where: { id },
include: [{ model: Product, as: 'products', through: { attributes: [] } }] });
    console.log('result: ', result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findById,
};