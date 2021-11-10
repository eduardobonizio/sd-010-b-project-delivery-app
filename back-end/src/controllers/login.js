const LoginService = require('../services/login');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const getUser = await LoginService.login({ email, password });
  if (!getUser) {
    return next('userDoesntExis');
  }
  res.status(200).json(getUser);
};

module.exports = {
  login,
};