const express = require('express');
const path = require('path');
const cors = require('cors');
const userRouter = require('../routes/user');
const loginRouter = require('../routes/login');
const productsRouter = require('../routes/products');
const admRouter = require('../routes/adm');

const app = express();

// const http = require('http').createServer(app);

// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   },
// });

app.use(express.json());
app.use(cors());

/** SOURCE https://www.ti-enxame.com/pt/javascript/como-voltar-1-nivel-de-pasta-com-dirname/1052924164/ */
app.use('/images', express.static(path.join(__dirname, '../../../', './back-end/public')));
app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/customer', productsRouter);
app.use('/adm', admRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
