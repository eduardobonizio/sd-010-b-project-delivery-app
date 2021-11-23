const productService = require('../services/productService');
const { STATUS_OK } = require('../utils/constants');

const getProducts = async (_req, res, next) => {
  try {
    const productsPayload = await productService.getProducts();
    if (productsPayload.error) return next(productsPayload);

    return res.status(STATUS_OK).json(productsPayload);
  } catch (error) {
    console.log(error);
    next(500);
  }
};

module.exports = {
  getProducts,
};