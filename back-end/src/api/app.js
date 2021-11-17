const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes/routes');

const app = express();
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
app.use(express.json());
app.use(cors());

app.use('/', routes.login);
app.use('/sales', routes.sales);
app.use('/checkout', routes.salesProducts);
app.use('/products', routes.product);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
