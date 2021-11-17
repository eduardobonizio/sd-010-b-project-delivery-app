const express = require('express');
const userController = require('../database/controllers/userControllers');

const app = express();

app.use(express.json());

app.post('/createUser', userController.createUser);

app.get('/', (_req, res) => res.status(200).send('Deu bom!'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
