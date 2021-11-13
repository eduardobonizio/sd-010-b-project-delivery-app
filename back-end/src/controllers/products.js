const products = require('../services/produtcs');

const getAllProducts = async (req, res) => {
  const allProducts = await products.getAllProducts();

  res.status(200).json({ products: allProducts });
};

module.exports = {
  getAllProducts,
};