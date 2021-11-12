const express = require('express');
const cors = require('cors');

const login = require('../routes/loginRouter');
const productsRouter = require('../routes/productsRouter');
const imagesRouter = require('../routes/imagesRouter');
const orderRouter = require('../routes/orderRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/login', login);
app.use('/products', productsRouter);
app.use('/images', imagesRouter);
app.use('/customer/orders', orderRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
