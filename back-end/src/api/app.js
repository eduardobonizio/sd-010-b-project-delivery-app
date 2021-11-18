const express = require('express');
const { productRouter } = require('../controllers/products');
const { registerRouter } = require('../controllers/registerRouter');
const { userRouter } = require('../controllers/users');

const app = express();

app.use(express.json());

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/customer', productRouter);

app.use('/login', userRouter);

app.use('/register', registerRouter);

app.get('/', (_req, res) => res.redirect('/login'));

module.exports = app;
