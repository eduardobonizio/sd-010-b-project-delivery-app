const md5 = require('md5');
const { User } = require('../../database/models');
const { ApiError } = require('../utils/ApiError');

const login = async (body) => {
  const { email, password } = body;
  const cryptPassword = md5(password);
  const user = await User.findOne({ where: { email, password: cryptPassword } });
  if (!user) throw new ApiError('User does not exist', 404);
  return user;
};

module.exports = {
  login,
};
