const Joi = require('joi');

const validarLogin = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }).validate({ email, password });

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  next();
};

module.exports = {
  validarLogin,
};