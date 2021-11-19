const { getAllProductsService } = require('../services/productService');

const getAllProductsController = async (_req, res) => {
  const allProducts = await getAllProductsService();

  res.status(200).json(allProducts);
};

module.exports = { getAllProductsController };
