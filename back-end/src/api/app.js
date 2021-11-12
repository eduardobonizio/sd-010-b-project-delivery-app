const express = require('express');
const { Sale, User } = require('../database/models');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginValidate = require('./middlewares/loginValidate');

const app = express();
app.use(express.json());

app.get('/teste', loginValidate, async (_req, res) => {
  try {
    const testeResult = await Sale.findAll({
      include: [{ model: User, as: 'users' }, { model: User, as: 'sellers' }],
    });

    return res.status(200).json(testeResult);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
