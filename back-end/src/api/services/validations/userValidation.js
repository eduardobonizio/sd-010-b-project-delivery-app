const md5 = require('md5');
const Joi = require('joi');
const { User } = require('../../../database/models');
const { ApiError } = require('../../utils/ApiError');

const validateUserData = async (body) => {
  const { error } = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  }).validate(body);
  if (error) {
    throw new ApiError(error.details[0].message, 400);
  }
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const checkIfUserExist = async ({ email, expectExist }) => {
  const user = await getUser(email);
  if (expectExist && !user) throw new ApiError('User does not exist', 404);
  if (!expectExist && user) throw new ApiError('User already exists', 409);
  return user;
};

const checkIfPasswordIsCorrect = async (userPassword, password) => {
  const cryptoPassword = md5(password);
  const isValid = userPassword === cryptoPassword;
  if (!isValid) throw new ApiError('Incorrect password');
  return true;
};

module.exports = {
  validateUserData,
  checkIfPasswordIsCorrect,
  checkIfUserExist,
};
