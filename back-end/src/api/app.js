const express = require('express');
const { userRouter, loginRouter } = require('../routes');

const app = express();
const error = require('../middlewares/error');

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use(error);

module.exports = app;
