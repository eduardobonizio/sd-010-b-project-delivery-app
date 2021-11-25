const { User } = require('../database/models');

const getUserByEmailService = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const getUserByNameService = async (name) => {
  const result = await User.findOne({ where: { name } });
  return result;
};
const createUserService = async ({ name, email, password, role }) => {
  const result = await User.create({ name, email, password, role });
  return result;
};

const getAllSellersService = async () => {
  const sellers = User.findAll({ where: { role: 'seller' } });
  return sellers;
};

module.exports = {
  getUserByEmailService,
  createUserService,
  getUserByNameService,
  getAllSellersService,
};
