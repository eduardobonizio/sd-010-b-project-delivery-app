const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const saleRouter = require('../routers/saleRouter');
const userRouter = require('../routers/saleRouter');

const { createUser } = require('../database/controllers/userController');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/sale', saleRouter);
app.use('/login', userRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', async (req, res) => createUser(req, res));

module.exports = app;
