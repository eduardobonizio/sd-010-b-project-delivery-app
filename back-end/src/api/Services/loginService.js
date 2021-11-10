// const Joi = require('joi');
const jwt = require('../jwt/jwtValidation');

const { user } = require('../../database/models');

const loginUser = async (body) => {
  const { email, password } = body;

  const login = await user.findOne({ where: { email, password } });
  if (!login) return { message: 'email ou senha errado' };

  const userId = login.id;

  const token = jwt.creatToken(userId);

  return token;
};

module.exports = {
  loginUser,
};
