const express = require('express');
const bodyParser = require('body-parser');
const { sellerRouter } = require('../routers/sellerRouter');
const { adminRouter } = require('../routers/adminRouter');
const { customerRouter } = require('../routers/customerRouter');

const app = express();
app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/');

app.post('/login');

app.post('/register');

/* Todas as rotas com /customer/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/customer', customerRouter);

/* Todas as rotas com /seller/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/seller', sellerRouter);

/* Todas as rotas com /admin/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/admin', adminRouter);

module.exports = app;
