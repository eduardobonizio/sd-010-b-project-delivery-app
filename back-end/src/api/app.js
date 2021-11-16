const express = require('express');
const cors = require('cors');

const error = require('../middleware/error');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/login', routes.login);
app.use('/register', routes.register);
app.use('/products', routes.products);
app.use('/sales', routes.sales);
app.use('/user', routes.users);

app.use(error);

module.exports = app;
