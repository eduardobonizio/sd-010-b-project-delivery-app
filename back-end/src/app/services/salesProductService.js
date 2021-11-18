const { SalesProduct } = require('../../database/models');

const findById = async (id) => {
  console.log('entrei no service');
  try {
    const result = await SalesProduct.findAll({ where: { id } });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findById,
};