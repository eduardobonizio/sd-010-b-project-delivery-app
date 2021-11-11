const md5 = require('md5');
const { Op } = require('sequelize');

const { User } = require('../../database/models');
const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const validateEmail = (email) => {
  if (!email || typeof email !== 'string') throw err(errorMessage.INVALID_ENTRIES);

  const validEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!validEmail) throw err(errorMessage.INVALID_ENTRIES);
};

const validatePassword = (password) => {
  if (!password || typeof password !== 'string' || password.length < 6) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateName = (name) => {
  if (!name || typeof name !== 'string' || name.length < 12) { 
    throw err(errorMessage.INVALID_ENTRIES); 
  }
};

const createUser = async (name, email, password) => {
  validateName(name);
  validateEmail(email);
  validatePassword(password);
  
  const response = await User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  if (response) throw err(errorMessage.EMAIL_REGISTRED);
};

const login = async (email, password) => {
  validateEmail(email);
  validatePassword(password);
  
  const response = await User.findOne({ where: { email } });
  if (!response) throw err(errorMessage.LOGIN_INCORRECT);
  
  const hashPassword = md5(password);
  const confirm = response.password === hashPassword;
  if (!confirm) throw err(errorMessage.LOGIN_INCORRECT);
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
  login,
  createUser,
};
