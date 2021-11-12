const express = require('express');
const cors = require('cors');

const error = require('../middleware/error');
const { registerRouter, productsRouter, loginRouter } = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);

app.use(error);

module.exports = app;
