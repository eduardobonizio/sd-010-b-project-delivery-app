const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => res.redirect('login'));

app.get('/login', (_req, res) => {
  res.status(200).json({ message: 'EU' });
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
