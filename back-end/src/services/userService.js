const { User } = require('../database/models');

const getUserByEmailService = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

module.exports = {
  getUserByEmailService,
};