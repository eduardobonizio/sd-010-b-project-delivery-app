const Joi = require("joi");

const checkLogin = (email, password) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });
  return schema;
};

module.exports = checkLogin;
