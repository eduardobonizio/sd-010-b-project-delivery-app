const express = require('express');
const cors = require('cors');
const userController = require('../database/controllers/userController');
const { getAllProducts } = require('../database/controllers/productControllers');
const { attemptLogin } = require('../database/controllers/loginController');

const app = express();
app.use(cors());

app.use(express.json());

// app.use('/images', express.static(`${__dirname}/public`));
app.use(express.static('public'));

app.post('/createUser', userController.createUser);

app.get('/products', getAllProducts);

app.get('/', (_req, res) => res.status(200).send('Deu bom!'));

app.post('/login', attemptLogin);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
