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

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.create(userData);

    const token = JWTgenerate({ user }, jwtConfig, secret);

    return res.status(status.CREATED).json({ token });
  } catch (error) {
    const { code, message } = error;
    return res.status(code).json({ message });
  }
};

module.exports = { loginUser };