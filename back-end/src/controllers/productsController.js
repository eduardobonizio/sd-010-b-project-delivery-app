// criar const model de trazer produtos
const { Product } = require('../database/models');

const getProducts = async (req, res) => {
  const products = await Product.findAll();
  // colocar model para buscar produtos
  res.status(200).json(products);
};

module.exports = { getProducts };