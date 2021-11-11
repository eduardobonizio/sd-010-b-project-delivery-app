const { productsService } = require('../services');

const getAll = (_req, res) => productsService.getAll()
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = { getAll };
