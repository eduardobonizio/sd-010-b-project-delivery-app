const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/');

app.post('/login');

app.post('register');

app.get('/customer/products/customer/checkout');

app.get('customer/orders');

app.post('/customer/order/:id');

app.get('/seller/orders');

app.post('/seller/order/:id');

app.get('/admin/manage');

app.post('/admin/manage/:id');

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
