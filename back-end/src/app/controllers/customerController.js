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

const createSalles = rescue(async (req, res) => {
  const create = await customerService.createSalles(req.body);
  return res.status(201).json(create);
});

module.exports = {
  getAll,
  getById,
  createSalles,
};
