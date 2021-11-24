const express = require('express');
const cors = require('cors');
const { userRouter,
  loginRouter, productsRouter, customerRouter, salesProductsRouter } = require('../routes');

const app = express();

const error = require('../middlewares/error');

app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/customers', customerRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/product', productsRouter);
app.use('/salesProducts', salesProductsRouter);
app.use('/images', express.static('public'));

app.use(error);

module.exports = app;
