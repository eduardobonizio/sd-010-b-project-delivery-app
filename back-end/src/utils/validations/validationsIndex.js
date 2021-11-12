const {  
  validateEmail,
  validatePassword,
  validateName,
  confirmPassword,
  confirmUser } = require('./validationsUsers')

const createUser = async (name, email, password) => {
  validateName(name);
  validateEmail(email);
  validatePassword(password);
  await confirmUser(name, email);
};

const login = async (email, password) => {
  validateEmail(email);
  validatePassword(password);
  await confirmLogin(email, password);
};

module.exports = { createUser, login };
