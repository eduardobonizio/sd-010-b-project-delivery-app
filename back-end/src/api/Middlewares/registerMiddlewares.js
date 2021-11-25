const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret_key';

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

const existToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json('Token não encontrado');
  }
  const { role } = jwt.verify(authorization, secret);
  if (role !== 'administrator') {
    return res.status(400).json('Token inválido');
  }

  next();
};

module.exports = {
  validarRegistro,
  existToken,
};