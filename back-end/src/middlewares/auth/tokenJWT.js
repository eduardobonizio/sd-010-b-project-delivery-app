const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtLogin = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  jwtLogin,
};
