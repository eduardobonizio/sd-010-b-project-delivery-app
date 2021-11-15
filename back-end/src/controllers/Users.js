const { usersService } = require('../services');

const getAllSellers = async (_req, res) => usersService.getAllSellers()
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = { getAllSellers };
