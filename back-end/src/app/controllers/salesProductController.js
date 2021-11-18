const rescue = require('express-rescue');
const salesProductService = require('../services/salesProductService');

const findById = rescue(async (req, res) => {
  const findUsers = await salesProductService.findById(req.params.id);
  return res.status(200).json(findUsers);
});

module.exports = {
  findById,
};
