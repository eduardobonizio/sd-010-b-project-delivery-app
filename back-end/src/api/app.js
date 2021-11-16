const express = require('express');
const { productRouter } = require('../controllers/products');
const { userRouter } = require('../controllers/users');

const app = express();

app.use(express.json());

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/cliente', productRouter);

app.use('/usuario', userRouter);

app.get('/', (_req, res) => res.redirect('/login'));

module.exports = app;
