const SHA256 = require('crypto-js/sha256');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const encript = SHA256(password).words.join('');
  const result = await User
    .findOne({ where: { email, password: encript }, attributes: { exclude: ['password'] } })
      .catch((e) => console.log(e));
  return result;
};

module.exports = {
  login,
};