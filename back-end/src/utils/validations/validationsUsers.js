const md5 = require('md5');
const { Op } = require('sequelize');

const { User } = require('../../database/models');
const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const validateEmail = (email) => {
  if (!email) throw err(errorMessage.INVALID_ENTRIES);

  const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  if (!validEmail) throw err(errorMessage.INCORRECT_FORMAT);
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    throw err(errorMessage.INVALID_ENTRIES);
  }

  // const validPassword = /[\w\D]{6}/g.test(password);
  // if (!validPassword) throw err(errorMessage.INCORRECT_FORMAT);
};

const validateName = (name) => {
  if (!name || name.length < 12) { 
    throw err(errorMessage.INVALID_ENTRIES); 
  }
};

const validateRole = (role) => {
  if (!role || role === '') { 
    throw err(errorMessage.INVALID_ENTRIES); 
  }
};

const validateUserInfo = (userInfo) => {
  if (userInfo.role !== 'administrator') { 
    throw err(errorMessage.UNAUTHORIZED_ENTRIES); 
  }
};

const confirmUser = async (name, email) => {
  const response = await User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
  if (response) throw err(errorMessage.EMAIL_REGISTRED);
};

const confirmLogin = async (email, password) => {
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
  validateRole,
  validateUserInfo,
  confirmLogin,
  confirmUser,
};
