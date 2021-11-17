const rescue = require('express-rescue');
const productService = require('../services/productService');

const findAll = rescue(async (_req, res) => {
  console.log('entrei');
  const findUsers = await productService.findAll();
  console.log('entrei no Controller: ', findUsers);
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
