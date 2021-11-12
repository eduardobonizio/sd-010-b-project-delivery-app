const productService = require("../services/productService");
const rescue = require("express-rescue");

const getAllProducts = rescue(async (_req, res) => {
  const result = await productService.getAllProducts();
  return res.status(200).json(result);
});

const getProductById = rescue(async (req, res) => {
  const { id} = req.params
  const result = await productService.getProductById(id);
  return res.status(200).json(result);
});

module.exports = { getAllProducts, getProductById };
