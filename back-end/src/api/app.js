const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const error = require('../middleware/error');
const { userRouter, productsRouter } = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/login', userRouter);
app.use('/products', productsRouter);

app.use(error);

module.exports = app;
