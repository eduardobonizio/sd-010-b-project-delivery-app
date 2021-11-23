const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfiguration = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const generateToken = (object) => {
  const payload = object;
  return jwt.sign({ data: payload }, secret.trim(), jwtConfiguration);
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, secret.trim());
  return payload;
}; 

const encode = (password) => md5(password);

module.exports = {
generateToken,
encode,
verifyToken,
};
