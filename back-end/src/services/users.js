const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../auth/token')

const getUserByEmail = async (email) => { 
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const createUser = async ({ name, email, password, role }) => {
  const user = await User.create({ name, email, password, role });
  return user;
};

const loginUser = async ({ email, password }) => {
  const hashedPassword = md5(password);
  const user = await User.findOne({ where: { email, password: hashedPassword } });

  if (!user) return { message: 'Usuário não encontrado' };

  const token = generateToken(user.dataValues);
  const { name, role } = user.dataValues;
  return { name, email, role, token };
};

module.exports = {
 getUserByEmail,
 getUserByName,
 createUser,
 loginUser,
};