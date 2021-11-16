const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/routes');
// const productsController = require('./controllers/product');

const images = path.join(__dirname, '..', '..', 'public');
const app = express();
app.use(bodyParser.json());
app.use(express.static(images));
app.use(express.json());
app.use(cors());

app.use('/', routes.login);
app.use('/products', routes.product);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
