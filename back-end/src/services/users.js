const { User } = require('../database/models');

const getUserByEmail = async (email) => { 
  const user = await User.findOne({ where: { email } });
  return user;
};

const createCustomerUser = async ({ name, email, password, role }) => { 
  const newUser = await User.create({ name, email, password, role });
  return newUser;
};

module.exports = {
 getUserByEmail,
 createCustomerUser,
};