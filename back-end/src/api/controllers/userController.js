const status = require('http-status');
const userService = require('../services/userService');
const generateToken = require('../../utils/generateToken');

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
    const { name, email, password } = req.body;

    await userService.createUser({ name, email, password });

    const token = await generateToken({ name, email, role: 'user' });

    return res.status(status.CREATED).json({ token, name, email, role: 'user' });
  } catch (error) {
    return res.status(status.CONFLICT).json({ message: 'Usuário já cadastrado' });
  }
};

module.exports = { loginUser, findUser, createUser };