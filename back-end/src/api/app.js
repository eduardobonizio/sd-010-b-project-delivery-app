const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const saleRouter = require('../routers/saleRouter');

const { getUserByEmail } = require('../controllers/userController');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/sale', saleRouter);

app.get('/login', async (_req, res) => res.status(200).json({ message: 'LOGIN' }));

app.post('/login', async (req, res) => getUserByEmail(req, res));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
