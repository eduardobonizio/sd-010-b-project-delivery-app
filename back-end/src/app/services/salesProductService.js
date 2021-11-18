const { Sale, Product } = require('../../database/models');

const findById = async (id) => {
    const result = await Sale.findAll({ where: { id },
include: [{ model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
    // console.log('result: ', result);
    return result;
};

module.exports = {
  findById,
};