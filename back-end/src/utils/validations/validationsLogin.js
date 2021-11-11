const { User } = require('../../database/models');

const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const validateEmail = (email) => {
  if (!email || typeof email !== 'string') throw err(errorMessage.LOGIN_NOT_FILLED);
  
  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!validEmail) throw err(errorMessage.INVALID_ENTRIES);
};

const validatePassword = (password) => {
  if (!password || typeof password !== 'string' || password.length < 6) {
    throw err(errorMessage.LOGIN_NOT_FILLED);
  }
};

const validateName = (name) => {
  if (!name || typeof name !== 'string' || name.length < 12) { 
    throw err(errorMessage.LOGIN_NOT_FILLED); 
  }
};

const login = async (email, password) => {
  validateEmail(email);
  validatePassword(password);
  const response = await User.findOne({ where: { email } });
  if (!response) throw err(errorMessage.LOGIN_INCORRECT);

  const confirm = response.password === password;
  if (!confirm) throw err(errorMessage.LOGIN_INCORRECT);
};

const createUser = async (name, email, password) => {
  validateName(name);
  validateEmail(email);
  validatePassword(password);
  const response = await User.findOne({ where: { email } });
  if (response) throw err(errorMessage.EMAIL_REGISTRED);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  login,
  createUser,
};
