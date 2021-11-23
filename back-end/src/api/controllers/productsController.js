const { StatusCodes } = require('http-status-codes');
const { getAllProductsService } = require('../services/productService');

const getAllProductsController = async (_req, res) => {
  const allProducts = await getAllProductsService();

  res.status(StatusCodes.OK).json(allProducts);
};

module.exports = { getAllProductsController };
