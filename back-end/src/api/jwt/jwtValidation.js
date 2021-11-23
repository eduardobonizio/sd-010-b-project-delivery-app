const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'secret_key';

const creatToken = (userId, role) => {
  const token = jwt.sign({ userId, role }, secret, jwtConfig);
  return token;
};

const validateJwt = (token) => {
  if (!token) return { message: 'Token not found', status: 404 };

  try {
    const result = jwt.verify(token, secret);
    return result;
  } catch (error) {
    return { message: 'Expired or invalid token', status: 401 };
  }
};

module.exports = {
  validateJwt,
  creatToken,
};