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

const findUser = async (req, res) => {
  const { email } = req.body;
  const existUser = await userService.findUser(email);
  if (existUser.message) {
    return res.status(status.NOT_FOUND).json(existUser);
  }

  return res.status(status.OK).json(existUser);
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData);

    const token = JWTgenerate({ user }, jwtConfig, secret);

    return res.status(status.CREATED).json({ token });
  } catch (error) {
    return res.status().json({ message });
  }
};

module.exports = { loginUser, findUser, createUser };