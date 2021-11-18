const rescue = require('express-rescue');
const customerService = require('../services/customerService');

const getAll = rescue(async (_req, res) => {
  const findCustomer = await customerService.getAll();
  return res.status(200).json(findCustomer);
});

const getById = rescue(async (req, res) => {
  const findId = await customerService.getById(req.params.id);
  return res.status(200).json(findId);
});

module.exports = {
  getAll,
  getById,

};