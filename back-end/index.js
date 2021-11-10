const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const { API_PORT } = process.env || 3001;

app.listen(API_PORT, () => console.log(`ouvindo porta ${API_PORT}!`));