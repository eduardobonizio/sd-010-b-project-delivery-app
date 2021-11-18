const rescue = require('express-rescue');
const productService = require('../services/productService');

const findAll = rescue(async (_req, res) => {
  const findUsers = await productService.findAll();
  return res.status(200).json(findUsers);
});

const findById = rescue(async (req, res) => {
  const findId = await productService.findById(req.params.id);
  return res.status(200).json(findId);
});

module.exports = {
  findAll,
  findById,
};
