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

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.createUser({ name, email, password });

    const token = await generateToken({ name, email, role: 'Customer' });

    return res.status(status.CREATED).json({ token, name, email, role: 'Customer' });
  } catch (error) {
    return res.status(status.CONFLICT).json({ message: 'Usuário já cadastrado' });
  }
};

const createUserByADM = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    await userService.createUserByADM({ name, email, password, role });
    const token = await generateToken({ name, email, role });

    return res.status(status.CREATED).json({ token, name, email, role });
  } catch (error) {
    return res.status(status.CONFLICT).json({ message: 'Usuário já cadastrado' });
  }
};

const INTERNAL_SERVER_ERROR_MSG = 'Alguma coisa deu errado :(';

const getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();

    res.status(status.OK).json(result);
  } catch (err) {
    console.log(err);
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    
    await userService.deleteUser(id);
    res.status(status.OK).json({ message: 'user deleted' });
  } catch (error) {
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_SERVER_ERROR_MSG });
  }
};

module.exports = { loginUser, createUser, createUserByADM, getAllUsers, deleteUser };