const { userService } = require('../services');

const createUser = async (req, res) => userService.createUser(req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

const login = async (req, res) => userService.login(req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

module.exports = {
  createUser,
  login,
};
