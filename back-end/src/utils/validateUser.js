const { User } = require('../database/models');
const CustomError = require('./CustomerError');
const Joi = require('joi');

const validationUser = (body) => {
  const { error } = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate(body);

  if (error) throw new CustomError(error.message, 400);
}

const validationUserByAdmin = (body) => {
  const { error } = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
  }).validate(body);

  if (error) throw new CustomError(error.message, 400);
}


const verifyUser = async (name, email) => {
  const findUserByEmail = await User.findOne({ where: { email } });
  const findUserByName = await User.findOne({ where: { name } });
  
  if (findUserByEmail || findUserByName) {
    throw new CustomError('User already registered', 409);
  }
};

const checkLogin = (email, password) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });

  if (error) throw new CustomError(error.message, 400);
};

module.exports = {
  verifyUser,
  validationUser,
  checkLogin,
  validationUserByAdmin
}