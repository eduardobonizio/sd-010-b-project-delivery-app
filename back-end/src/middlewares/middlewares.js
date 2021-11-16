const jwt = require('jsonwebtoken');
const md5 = require('md5');

const secret = 'secret_key';

const jwtConfiguration = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const generateToken = (object) => {
  const payload = object;
  return jwt.sign({ data: payload }, secret, jwtConfiguration);
};

const encode = (password) => md5(password);

module.exports = {
generateToken,
encode,
};
