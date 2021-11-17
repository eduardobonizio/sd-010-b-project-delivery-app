const httpStatus = require('http-status');
const md5 = require('md5');

const { User } = require('../database/models');
const validations = require('../utils/validations');
const generateToken = require('../utils/token');

const createUserCustomer = async ({ name, email, password }) => {
  await validations.createUserCustomer(name, email, password);

  const newUser = await User.create({ name, email, password: md5(password), role: 'customer' });

  const token = generateToken(newUser);

  const data = [{ 
      id: newUser.id, 
      name,
      email,
      role: 'customer',
      token, 
    }];

  return ({ status: httpStatus.CREATED, data });
};

const createUserAdmin = async ({ name, email, password, role }, userInfo) => {
  await validations.createUserAdmin(name, email, password, role, userInfo);

  const newUser = await User.create({ name, email, password: md5(password), role });

  const data = [{ 
      id: newUser.id, 
      name,
      email,
      role,
    }];

  return ({ status: httpStatus.CREATED, data });
};

module.exports = { createUserCustomer, createUserAdmin };
