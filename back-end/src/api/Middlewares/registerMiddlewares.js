const Joi = require('joi');

const validarRegistro = (req, res, next) => {
  const { email, password, name } = req.body;
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(12).required(),
  }).validate({ email, password, name });

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  next();
};

module.exports = {
  validarRegistro,
};