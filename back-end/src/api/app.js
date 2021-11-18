const express = require('express');
const cors = require('cors');
const http = require('http');
const io = require('socket.io');

const error = require('../middleware/error');
const routes = require('./routes');

const app = express();

const server = http.createServer(app);
const socket = (io)(server, {
  cors: {
    origin: 'http://localhost:3001', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  } });

app.use(express.json());

app.use(cors());
app.use(express.static('public'));

require('../sockets/status')(socket);

app.use('/login', routes.login);
app.use('/register', routes.register);
app.use('/products', routes.products);
app.use('/sales', routes.sales);
app.use('/user', routes.users);

app.use(error);

module.exports = app;
