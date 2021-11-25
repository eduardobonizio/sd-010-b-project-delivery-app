const { Sale, Product } = require('../../database/models');

const getAll = async () => Sale.findAll({
  attributes: { exclude: ['urlImage'] },
  include: [{ model: Product, as: 'products' }],
});

// const getAllByUserId = async (userid) =>  

module.exports = {
  getAll,
  // getAllByUserId,
};