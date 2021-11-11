const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/login', async (_req, res) => res.status(200).json({ message: 'LOGIN' }));

app.post('/login', async (req, res) => {
  
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
