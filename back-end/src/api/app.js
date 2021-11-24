const express = require('express');
const cors = require('cors');

const login = require('../routes/loginRouter');
const productsRouter = require('../routes/productsRouter');
const imagesRouter = require('../routes/imagesRouter');
const register = require('../routes/register');
const registerRouter = require('../routes/adminRegisterRouter');
const orderRouter = require('../routes/orderRouter');
const sellerRouter = require('../routes/seller');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/admin/manage/register', registerRouter);
app.use('/customer/orders', orderRouter);
app.use('/login', login);
app.use('/products', productsRouter);
app.use('/images', imagesRouter);
app.use('/sellers', sellerRouter);
app.use('/register', register);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
