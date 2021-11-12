const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const { loginController, register } = require('../controllers/loginController');
const { getProducts } = require('../controllers/productsController');
const { 
  verifyName,
  verifyEmail,
  verifyPassword,
  verifyDbUser,
  verifyNameDB,
  verifyEmailDB,
  } = require('../middlewares/middleLogin');
// const { validateJWT } = require('../middlewares/tokenVerify');

app.use(cors());

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '..', '..', 'public')));

app.post('/login', verifyEmail, verifyPassword, verifyDbUser, loginController);
app.post('/register', 
verifyName, verifyEmail, verifyPassword, verifyNameDB, verifyEmailDB, register);
app.get('/products', getProducts);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
