const { salesService } = require('../services');

const createSale = async (req, res) => salesService.createSale(req.userInfo, req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

const getAll = async (req, res) => salesService.getAll(req.userInfo)
  .then(({ status, data }) => res.status(status).json({ data }));

const getById = async (req, res) => salesService.getById(req.params)
  .then(({ status, data }) => res.status(status).json({ data }));

const updateStatus = async (req, res) => salesService.updateStatus(req.params, req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = { createSale, getAll, getById, updateStatus };
