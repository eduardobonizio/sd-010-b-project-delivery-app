const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};
// const secret = process.env.JWT_SECRET || 'secret_key';
const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const jwtLogin = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  jwtLogin,
};
