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
  const { id, name, role } = userFound;

  const token = generateToken({ name, role, email });

  return { id, name, email, role, token };
};

const createUser = async ({ name, email, password }) => {
  await user.create({
    name, email, password: cryptoPassword(password), role: 'Customer',
  });
  const token = generateToken({ name, role: 'Customer', email });
  return { name, email, role: 'Customer', token };
};

const createUserByADM = async ({ name, email, password, role }) => {
  const testUser = await existUser({ email, password });
  if (testUser.message) {
    await user.create({ name, email, password: cryptoPassword(password), role }); 
    const token = generateToken({ name, role, email });

    return { name, email, role, token };
  }
  return { message: 'Usuário já existe' };
};

const getAllUsers = async () => {
  const allUsers = await user.findAll();
  return allUsers;
};

const deleteUser = async (id) => {
  await user.destroy({ where: { id } });
};

const getAllSellers = async () => user.findAll({ where: { role: 'seller' } });

module.exports = {
  existUser,
  createUser,
  findUser,
  getAllSellers,
  createUserByADM,
  getAllUsers,
  deleteUser
};
