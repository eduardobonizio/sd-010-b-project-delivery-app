const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'superSeguro';

const creatToken = (userId, displayName, email) => {
  const token = jwt.sign({ userId, displayName, email }, secret, jwtConfig);
  return token;
};

const validateJwt = (token) => {
  if (!token) return { message: 'Token not found', Status: 404 };

  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch (error) {
    return { message: 'Expired or invalid token', Status: 401 };
  }
};

module.exports = {
  validateJwt,
  creatToken,
};