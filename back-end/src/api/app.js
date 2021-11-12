const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes.login);
app.use('/register', routes.register);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
