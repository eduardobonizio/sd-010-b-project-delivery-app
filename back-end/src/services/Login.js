const httpStatus = require('http-status');

const { User } = require('../database/models');
const validations = require('../utils/validations');
const generateToken = require('../utils/token');

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

module.exports = { login };
