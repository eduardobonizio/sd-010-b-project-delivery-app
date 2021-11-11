const { User } = require('../../database/models');

const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const loginEmail = (email) => {
  if (!email || typeof email !== 'string') throw err(errorMessage.LOGIN_NOT_FILLED);
};

const loginPassword = (password) => {
  if (!password || typeof password !== 'string') throw err(errorMessage.LOGIN_NOT_FILLED);
};

const loginConfirmUser = async (email, password) => {
  const response = await User.findOne({ where: { email } });
  if (!response) throw err(errorMessage.LOGIN_INCORRECT);

  const confirm = response.password === password;
  if (!confirm) throw err(errorMessage.LOGIN_INCORRECT);
};

module.exports = {
  loginEmail,
  loginPassword,
  loginConfirmUser,
};
