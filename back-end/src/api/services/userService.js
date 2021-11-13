const md5 = require('md5');
const { user } = require('../../database/models');
const generateToken = require('../../utils/generateToken');

const cryptoPassword = (password) => {
  const regexExp = /^[a-f0-9]{32}$/gi;
  if (!password.match(regexExp)) {
    return md5(password);
  }

  return password;
};

const existUser = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email, password: cryptoPassword(password) } });
  if (userFound === null) {
    return { message: 'Usuário não encontrado' };
  }
  const { name, role } = userFound;

  const token = generateToken({ name, role, email });

  return { name, email, role, token };
};

const createUser = async ({ name, email, password }) => {
  await user.create({
    name, email, password: cryptoPassword(password), role: 'user',
  });
  const token = generateToken({ name, role: 'user', email });
  return { name, email, role: 'user', token };
};

const getAllUsers = async () => {
  const allUsers = await user.findAll();
  return allUsers;
};

module.exports = { existUser, createUser, getAllUsers };
