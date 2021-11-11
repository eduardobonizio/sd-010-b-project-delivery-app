const httpStatus = require('http-status');

const { User } = require('../database/models');
const validations = require('../utils/validations/validationsLogin');
const generateToken = require('../utils/generateToken');

const login = async ({ email, password }) => {
  await validations.login(email, password);

  const isAuthenticated = await User.findOne({ where: { email } });

  const token = generateToken(isAuthenticated);

  const response = { data: { ...isAuthenticated, token } };
  
  return ({ status: httpStatus.OK, response });
};

const createUser = async ({ name, email, password }) => {
  await validations.createUser(name, email, password);

  const createdUser = await User.create({ name, email, password, role: 'customer' });

  const token = generateToken(createdUser);

  const response = { data: { ...createdUser, token } };

  return ({ status: httpStatus.OK, response });
};

module.exports = { login, createUser };
