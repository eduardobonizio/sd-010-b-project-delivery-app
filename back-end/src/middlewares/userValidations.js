const rescue = require('express-rescue');
const Joi = require('joi');

const validUser = rescue(async (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    role: Joi.string().required(),
}).validate(req.body);

  if (error) return next(error);

  return next();
});

module.exports = validUser;