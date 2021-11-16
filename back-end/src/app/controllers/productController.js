const rescue = require('express-rescue');
const productService = require('../services/productService');

const findAll = rescue(async (_req, res) => {
  console.log('entrei');
  const findUsers = await productService.findAll();
  console.log('entrei no Controller: ', findUsers);
  return res.status(200).json(findUsers);
});

module.exports = {
  findAll,
};
