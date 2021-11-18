const { Sale, Product } = require('../../database/models');

const getAll = async () => Sale.findAll({
  attributes: { exclude: ['urlImage'] },
  include: [{ model: Product, as: 'products' }],
});

module.exports = {
  getAll,
};