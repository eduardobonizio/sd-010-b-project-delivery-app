const { User } = require('../database/models');

const login = async ({ email, password }) => {
  console.log(email, password);
  const getUser = await User.findOne({ where: { email, password } }).catch((e) => console.log(e));
  return getUser;
};

module.exports = {
  login,
};