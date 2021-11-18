// const Joi = require('joi');
const md5 = require('md5');
const jwt = require('../jwt/jwtValidation');

const { user } = require('../../database/models');

const loginUser = async (body) => {
  const { email, password } = body;

  const newPassword = md5(password);

  const query = { where: { email, password: newPassword } };
  
  const login = await user.findOne(query);
  if (!login) return { message: 'email ou senha errado' };

  const userId = login.id;

  const token = jwt.creatToken(userId);

  return { 
    name: login.name,
    email: login.email,
    role: login.role,
    token,
  };
};

module.exports = {
  loginUser,
};
