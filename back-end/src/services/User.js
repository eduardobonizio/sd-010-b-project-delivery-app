const httpStatus = require('http-status');
const md5 = require('md5');

const { User } = require('../database/models');
const validations = require('../utils/validations/validationsLogin');
const generateToken = require('../utils/generateToken');

const login = async ({ email, password }) => {
  await validations.login(email, password);

  const isAuthenticated = await User.findOne({ where: { email } });

  const token = generateToken(isAuthenticated);

  const data = [{ 
      id: isAuthenticated.id, 
      name: isAuthenticated.name,
      email,
      role: isAuthenticated.role,
      token, 
    }];
  
  return ({ status: httpStatus.OK, data });
};

const createUser = async ({ name, email, password }) => {
  await validations.createUser(name, email, password);

  const newUser = await User.create({ name, email, password: md5(password), role: 'customer' });

  const token = generateToken(email);

  const data = [{ 
      id: newUser.id, 
      name,
      email,
      role: 'customer',
      token, 
    }];

  return ({ status: httpStatus.CREATED, data });
};

module.exports = { login, createUser };
