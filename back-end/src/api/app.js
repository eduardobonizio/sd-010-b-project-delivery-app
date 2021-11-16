const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:37115'],
    methods: ['GET', 'POST'],
  },
});

const loginController = require('../controllers/login');
const productsController = require('../controllers/products');
const registerController = require('../controllers/register');

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginController);

app.use('/register', registerController);

app.use('/products', productsController);

require('../sockets/products')(io);

module.exports = app;
