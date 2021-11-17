const { User } = require('../database/models');

const getUserByEmail = async (email) => { 
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserByName = async (name) => {
  const user = await User.findOne({ where: { name } });
  return user;
};

const createUser = async (name, email, password, role) => {
  const user = await User.create({ name, email, password, role });
  return user;
};

module.exports = {
 getUserByEmail,
 getUserByName,
 createUser,
};