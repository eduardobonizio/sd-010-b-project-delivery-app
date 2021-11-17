const express = require('express');
// const { Sale, User } = require('../database/models');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const emailValidate = require('./middlewares/emailValidate');
const passwordValidate = require('./middlewares/passwordValidate');
const nameValidate = require('./middlewares/nameValidate');
const { loginValidateService, registerValidateService } = require('./services/userService');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', emailValidate, passwordValidate, async (req, res, next) => {
  const { email, password } = req.body;

  const loginData = await loginValidateService(email, password);

  if (loginData.err) {
    return next(loginData.err);
  }  

  return res.status(200).json(loginData);
});

app.post('/register', emailValidate, passwordValidate, nameValidate, async (req, res, next) => {
  const { name, email, password } = req.body;

  const registerData = await registerValidateService(name, email, password);

  if (registerData.err) {
    return next(registerData.err);
  }  

  return res.status(201).json(registerData);
});

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
