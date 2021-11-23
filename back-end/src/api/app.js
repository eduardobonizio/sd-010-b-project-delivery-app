const express = require('express');
const cors = require('cors');
const path = require('path');
const { productRouter } = require('../controllers/products');
const { registerRouter } = require('../controllers/registerRouter');
const { userRouter } = require('../controllers/users');

const app = express();

app.use(express.json());
app.use(cors());

const staticDestination = path.join(__dirname, '..', 'database', 'images');
app.use('/images', express.static(staticDestination));

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/customer', productRouter);

app.use('/login', userRouter);

app.use('/register', registerRouter);

app.get('/', (_req, res) => res.redirect('/login'));

app.use((err, _req, res, _next) => { 
  console.log('ERRO AQUI ÓÓ !!!!', err);
  return res.status(500).json(err);
});

module.exports = app;
