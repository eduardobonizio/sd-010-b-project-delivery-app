const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 

const { userRouter, productRouter, saleRouter } = require('./routers');

app.use('/', userRouter);
app.use('/', saleRouter);
app.use('/products', productRouter);
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
