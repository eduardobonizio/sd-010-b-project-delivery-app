const { registerService } = require('../services');

const createUser = async (req, res) => registerService.createUser(req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = {
  createUser,
};
