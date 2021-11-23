const md5 = require('md5');
const { User } = require('../models');

const encriptPassword = (password) => md5(password);

const createUser = async (name, email, password) => {
  try {
  const hashedPassword = encriptPassword(password);

  const newUser = await User.create({ name, email, password: hashedPassword, role: 'customer' });
  
  return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};
