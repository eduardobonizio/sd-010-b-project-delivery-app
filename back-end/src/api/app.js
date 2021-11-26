const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:37115'],
    methods: ['GET', 'POST'],
  },
});
const { adminRouter } = require('../routers/adminRouter');
const { customerRouter } = require('../routers/customerRouter');
const { sellerRouter } = require('../routers/sellerRouter');
const loginController = require('../controllers/login');
const productsController = require('../controllers/products');
const registerController = require('../controllers/register');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginController);
app.use('/register', registerController);
app.use('/products', productsController);
require('../sockets/products')(io);
/* Todas as rotas com /customer/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/customer', customerRouter);
/* Todas as rotas com /seller/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/seller', sellerRouter);
/* Todas as rotas com /admin/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/admin', adminRouter);

module.exports = app;
