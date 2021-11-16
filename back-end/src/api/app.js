const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { getUserByEmail, createUser } = require('../database/controllers/userController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/login', async (_req, res) => res.status(200).json({ message: 'LOGIN' }));

app.post('/login', async (req, res) => getUserByEmail(req, res));

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', async (req, res) => createUser(req, res));

module.exports = app;
