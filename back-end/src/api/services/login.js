const md5 = require('md5');
const { User } = require('../../database/models');

const login = async ({ email, password }) => {
  const hash = md5(password);
  const result = await User.findOne({ where: { email, password: hash } });
  return result; 
};

module.exports = {
  login,
};