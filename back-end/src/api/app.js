const express = require('express');
const cors = require('cors');
const { attemptLogin } = require('../controllers/Login');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.redirect('/login');
});

app.get('/login', (_req, res) => {
  res.status(200).send('Deu Bom!');
});

app.post('/login', attemptLogin);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
