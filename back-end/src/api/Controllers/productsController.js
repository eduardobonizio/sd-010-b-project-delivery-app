const productsService = require('../Services/productsService');

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  return res.status(201).json(products);
};

module.exports = {
  getAllProducts,
};