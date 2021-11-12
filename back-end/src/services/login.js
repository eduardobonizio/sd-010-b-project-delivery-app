const MD5 = require('md5');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const encript = MD5(password);
  const result = await User
    .findOne({ where: { email, password: encript }, attributes: { exclude: ['password'] } })
      .catch((e) => console.log(e));
  return result;
};

module.exports = {
  login,
};