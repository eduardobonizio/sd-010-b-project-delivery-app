const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
}));

const { userRouter, productRouter, saleRouter, saleProductRouter } = require('./routers');

app.use('/', userRouter);
app.use('/', saleRouter);
app.use('/', saleProductRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
