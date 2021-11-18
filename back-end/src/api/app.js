const express = require('express');

const app = express();

app.get('/', (_req, res ) => {
  res.redirect('/login');
});

app.get('/login', (_req, res) => {
  res.status(200).send('Deu Bom!');
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
