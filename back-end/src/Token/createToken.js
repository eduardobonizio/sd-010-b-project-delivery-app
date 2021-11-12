require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = '123456';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createJWT = (body) => {
  const { email, name, id, role } = body;
  return jwt.sign({ email, name, id, role }, SECRET, jwtConfig);
};

module.exports = { createJWT };