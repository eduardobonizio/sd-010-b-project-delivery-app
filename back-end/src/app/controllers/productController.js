const rescue = require('express-rescue');
const productService = require('../services/productService');

const findAllProduct = rescue(async (req, res) => {  
  const product = await productService.findAll();
  return res.status(200).json(product);
});

module.exports = {
  findAllProduct,
};
