const express = require('express');
const userController = require('../database/controllers/userControllers');
const cors = require('cors');
const { attemptLogin } = require('../database/controllers/Login');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.json());

app.post('/createUser', userController.createUser);

app.get('/', (_req, res) => res.status(200).send('Deu bom!'));

app.post('/login', attemptLogin);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
