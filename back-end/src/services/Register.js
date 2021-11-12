const httpStatus = require('http-status');
const md5 = require('md5');

const { User } = require('../database/models');
const validations = require('../utils/validations/validationsUsers');
const generateToken = require('../utils/generateToken');

const createUser = async ({ name, email, password }) => {
  await validations.createUser(name, email, password);

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

module.exports = { createUser };
