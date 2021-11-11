const Joi = require('joi');

const rescue = require('express-rescue');

const loginFields = rescue(async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });
  if (error) {
    next(error);
  }
  next();
});

const registerFilds = rescue(async (req, _res, next) => {
  const { name, email, password } = req.body;
  const { error } = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ name, email, password });
  if (error) {
    next(error);
  }
  next();
});

module.exports = {
  loginFields,
  registerFilds,
};