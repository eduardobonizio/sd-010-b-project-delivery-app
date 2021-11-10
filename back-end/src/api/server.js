const port = process.env.PORT || 3001;
const cors = require('cors');
const app = require('./app');
const express = require('express');
const login  = require('../routers/Login');

app.use(express.json());
app.use(cors());

// LOGIN
app.use('/login', login);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
