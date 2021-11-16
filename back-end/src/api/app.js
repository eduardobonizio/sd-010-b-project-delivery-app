const express = require('express');
const cors = require('cors');
// rotas 
const routeLogin = require('./routes/login');
const routeProducts = require('./routes/products');
// rotas

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routeLogin);
app.use('/products', routeProducts);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
