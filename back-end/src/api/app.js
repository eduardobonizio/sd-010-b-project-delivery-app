const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const saleRouter = require('../routers/saleRouter');
const customerRouter = require('../routers/customerRouter');

const { getUserByEmail, createUser } = require('../controllers/userController');

const app = express();
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));

app.use(cors());
app.use('/sale', saleRouter);

app.use('/customer', customerRouter);

app.get('/login', async (_req, res) => res.status(200).json({ message: 'LOGIN' }));

app.post('/login', getUserByEmail);

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', async (req, res) => createUser(req, res));

module.exports = app;
