const express = require('express');
const path = require('path');

const app = express();

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')))

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
