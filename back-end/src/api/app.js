const express = require('express');
// const { Sale, User } = require('../database/models');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginEmailValidate = require('./middlewares/loginEmailValidate');
const loginPasswordValidate = require('./middlewares/loginPasswordValidate');
const { loginValidateService } = require('./services/userService');

const app = express();
app.use(express.json());

app.post('/login', loginEmailValidate, loginPasswordValidate, async (req, res, next) => {
  const { email, password } = req.body;

  const testeResult = await loginValidateService(email, password);
  if (testeResult.err) {
    return next(testeResult.err);
  }  
  return res.status(200).json(testeResult);
});

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
