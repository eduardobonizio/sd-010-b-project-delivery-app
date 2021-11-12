const productService = require('../services/productService');

const getProducts = async (_req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
};
