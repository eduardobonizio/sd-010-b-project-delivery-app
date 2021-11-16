const { user } = require('../../database/models');

const checkUser = async (name, email) => {
  const check = await user.findOne({ where: { name, email } });

  if (!check) return false;

  return true;
};

const registerUser = async ({ name, password, email }) => {
  const check = await checkUser(name, email);

  if (check) return 'User already exists';

  const register = await user.create({ name, password, email });

  if (!register) return 'Invalid data';

  return register;
};

module.exports = {
  registerUser,
};
