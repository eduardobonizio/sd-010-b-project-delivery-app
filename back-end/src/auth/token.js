require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const jwtConfiguration = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  
const generateToken = (data) => jwt.sign({ data }, SECRET, jwtConfiguration);

const validateToken = ()

module.exports = generateToken;