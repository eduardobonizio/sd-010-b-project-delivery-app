const express = require('express');

// const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const login = require('../database/controller/loginController');

app.use('/login', login);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
