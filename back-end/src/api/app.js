const express = require('express');

// const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const login = require('../database/controller/loginController');
const products = require('../database/controller/productController');
const signUp = require('../database/controller/signUpController');

app.use('/login', login);
app.use('/products', products);
app.use('/register', signUp);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
