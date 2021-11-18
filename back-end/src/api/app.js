const express = require('express');
const cors = require('cors');

const app = express();

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');
const saleRouter = require('./routes/saleRouter');

const error = require('./middlewares/error');

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/sale', saleRouter);
app.use('/images', express.static('public'));
app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
