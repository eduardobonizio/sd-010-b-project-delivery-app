require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const secretKey = fs
  .readFileSync(path.join(`${__dirname}../../../jwt.evaluation.key`), { encoding: 'utf-8' }).trim();
  
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (userData) => jwt.sign(userData, secretKey, jwtConfig);

module.exports = generateToken;
