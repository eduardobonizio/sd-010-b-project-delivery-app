require('dotenv').config();
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');

const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();

const messageError = (status, message) => ({
  status,
  message,
});

const validToken = rescue(async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw messageError(401, 'Token not found');

  jwt.verify(token, secret, (err, decoded) => {
    if (err) throw messageError(401, 'Expired or invalid token');
   
    req.payload = decoded;
  });

  const { payload } = req;

  console.log(payload);
  next();
});

module.exports = { validToken };
