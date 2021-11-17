const express = require('express');
const cors = require('cors');
const path = require('path');
// rotas 
const routeLogin = require('./routes/login');
const routeRegister = require('./routes/register');
const routeProducts = require('./routes/products');
// rotas

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routeLogin);
app.use('/register', routeRegister);
app.use('/products', routeProducts);
app.use('/images', express.static(path.join(__dirname, '', 'Images')));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
