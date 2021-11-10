const express = require('express');
const cors = require('cors');

const app = express();

const loginRouter = require('./routes/loginRouter');
const error = require('./middlewares/error');

app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
