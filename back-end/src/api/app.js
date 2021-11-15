const express = require('express');
const cors = require('cors');

const error = require('../middleware/error');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/login', routes.loginRouter);
app.use('/register', routes.registerRouter);
app.use('/products', routes.productsRouter);
app.use('/sales', routes.salesRouter);
app.use('/user', routes.usersRouter);

app.use(error);

module.exports = app;
