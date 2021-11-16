const { productsService } = require('../services');

const getAll = async (_req, res) => productsService.getAll()
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = { getAll };
