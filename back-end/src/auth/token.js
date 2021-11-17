require('dotenv').config();
const jwt = require('jsonwebtoken');
const { getUserByName } = require('../services/users');

const { SECRET } = process.env;

const jwtConfiguration = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  
const generateToken = (data) => jwt.sign({ data }, SECRET, jwtConfiguration);

const validateToken = async (token) => {
  if (!token) return { message: 'missing auth token' };
  try {
    const { data } = jwt.verify(token, SECRET);
    const user = await getUserByName(data.name);
    return user;
  } catch (error) {
    return { message: 'jwt malformed' };
  }
};

module.exports = {
  generateToken,
  validateToken,
};