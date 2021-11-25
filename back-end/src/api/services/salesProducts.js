const { Sale, Product } = require('../../database/models');

const getAll = async () => Sale.findAll({
  attributes: { exclude: ['urlImage'] },
  include: [{ model: Product, as: 'products' }],
});

const getAllByUserId = async ({ id }) => Sale.findAll({
  where: { userId: id },
    include: [{ model: Product, as: 'products', through: { attributes: [] } }] });

module.exports = {
  getAll,
  getAllByUserId,
};