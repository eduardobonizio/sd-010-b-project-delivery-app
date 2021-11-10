// const Joi = require('joi');
const jwt = require('../jwt/jwtValidation');

const { User } = require('../../database/models');

const loginUser = async (body) => {
  const { email, password } = body;

  // const { error } = Joi.object({
  //   email: Joi.string().email().required(),
  //   password: Joi.string().length(6).required(),
  // }).validate({ email, password });

  // if (error) return error;

  const login = await User.findOne({ where: { email, password } });
  if (!login) return { message: 'email ou senha errado' };

  const userId = login.id;

  const token = jwt.creatToken(userId);

  return token;
};

module.exports = {
  loginUser,
};
