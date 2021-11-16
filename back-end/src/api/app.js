const express = require('express');
const cors = require('cors');
// const multer = require('multer');
const path = require('path');

const middlewareError = require('../middlewares/error');
const loginRoute = require('../routes/loginRoute');
const userRegisterRoute = require('../routes/userRegisterRoute');
const productsRoute = require('../routes/productsRoute');

const app = express();

// const upload = multer({ dest: '/public' });

app.use('/images', express.static(path.join(__dirname, '..', 'public')));

// upload.single();

app.use(express.json());

app.use(cors());
app.use('/login', loginRoute);
app.use('/register', userRegisterRoute);
app.use('/products', productsRoute);

app.use(middlewareError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
