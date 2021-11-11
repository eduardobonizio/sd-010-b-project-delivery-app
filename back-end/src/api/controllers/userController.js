const status = require('http-status');
const userService = require('../services/userService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const existUser = await userService.existUser({ email, password });
  
  if (existUser.message) {
    return res.status(status.NOT_FOUND).json(existUser);
  }

  return res.status(status.OK).json(existUser);
};

module.exports = { loginUser };