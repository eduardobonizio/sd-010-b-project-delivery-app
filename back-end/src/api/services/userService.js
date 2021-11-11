const md5 = require('md5');
const { user } = require('../../database/models');

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
  return userFound;
};

const createUser = async ({ name, email, password }) => {
  const newUser = await user.create({
    name, email, password: cryptoPassword(password), role: 'user',
  });
  return newUser;
};

module.exports = { existUser, createUser };