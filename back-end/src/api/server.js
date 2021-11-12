const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');
const express = require('express');
const login  = require('../routers/Login');
const register = require('../routers/Register');

const customer = require('../routers/Customer');
const seller = require('../routers/Seller');

const error = require('../middleware/error');

app.use(express.json());
app.use(cors());

// LOGIN
app.use('/login', login);
//REGISTER
app.use('/register', register);
//PRODUCT

app.use('/customer', customer)


// SELLER
app.use('/seller', seller);

app.use(error);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
