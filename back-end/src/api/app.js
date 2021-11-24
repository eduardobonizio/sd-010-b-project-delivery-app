const express = require('express');
const cors = require('cors');

// const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

const login = require('../database/controller/loginController');
const products = require('../database/controller/productController');
const signUp = require('../database/controller/signUpController');
const sales = require('../database/controller/saleController');
const users = require('../database/controller/userController');

app.use('/login', login);
app.use('/products', products);
app.use('/register', signUp);
app.use('/sales', sales);
app.use('/users', users);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
