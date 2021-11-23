require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { getUserByName } = require('../services/users');

// const secret = require('../../')
const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  return data;
});

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
