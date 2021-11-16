const md5 = require('md5');
const { user } = require('../../database/models');

const checkUser = async (name, email) => {
  const check = await user.findOne({ where: { name, email } });

  if (!check) return false;

  return true;
};

const registerUser = async ({ name, password, email }) => {
  const newPassword = md5(password);
  const check = await checkUser(name, email);

  if (check) return false;

  const register = await user.create({ name, password: newPassword, email });

  if (!register) return false;

  return register;
};

module.exports = {
  registerUser,
};
