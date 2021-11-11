const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');
const express = require('express');
const login  = require('../routers/Login');
const register = require('../routers/Register');
const checkout = require('../routers/Checkout');
const product = require('../routers/Product');
const order = require('../routers/Order');
const error = require('../middleware/error');

app.use(express.json());
app.use(cors());

// LOGIN
app.use('/login', login);
//REGISTER
app.use('/register', register);
// SALE
app.use('/sale', checkout);
//PRODUCT
app.use('/customer/products', product)
//ORDER
app.use('/customer/orders', order);


app.use(error);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
