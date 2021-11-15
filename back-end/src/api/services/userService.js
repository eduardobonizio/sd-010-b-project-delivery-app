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
    name, email, password: cryptoPassword(password), role: 'Customer',
  });
  const token = generateToken({ name, role: 'Customer', email });
  return { name, email, role: 'Customer', token };
};

const createUserByADM = async ({ name, email, password, role }) => {
  await user.create({
    name, email, password: cryptoPassword(password), role,
  });
  const token = generateToken({ name, role, email });
  return { name, email, role, token };
};

const getAllUsers = async () => {
  const allUsers = await user.findAll();
  return allUsers;
};

const deleteUser = async (id) => {
  await user.destroy({ where: { id } });
};

module.exports = { existUser, createUser, createUserByADM, getAllUsers, deleteUser };
