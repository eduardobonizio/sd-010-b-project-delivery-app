const express = require('express');
const { Product, Sale, User } = require('../database/models')

const app = express();

app.get('/teste', async (_req, res) => {
  try {
    const testeResult = await Sale.findAll({
      include: { model: User, as: 'users'},
    });

    return res.status(200).json(testeResult);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
