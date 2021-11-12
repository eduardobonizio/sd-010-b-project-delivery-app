const { loginService } = require('../services');

const login = async (req, res) => loginService.login(req.body)
  .then(({ status, data }) => res.status(status).json({ data }));

  module.exports = { login };
