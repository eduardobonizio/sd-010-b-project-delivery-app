const md5 = require('md5');
const { user } = require('../database/models');

const validateLogin = async ({ email, password }) => {
  const userData = await user.findOne({ where: { email } });
  if (!userData) return { code: 404, message: 'Not found' };
  if (userData.password !== md5(password)) return { code: 404, message: 'Not found' };
  return {};
};

module.exports = { validateLogin };

/*
zebirita@email.com
$#zebirita#$
*/