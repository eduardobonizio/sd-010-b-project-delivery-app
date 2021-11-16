require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { UNAUTHORIZED, NOT_FOUND } = require('http-status');

const { user } = require('../../database/models');

const secretKey = fs
  .readFileSync(
    path.join(`${__dirname}../../../../jwt.evaluation.key`),
    { encoding: 'utf-8' },
).trim();

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(UNAUTHORIZED).json({ message: 'missing auth token' });
  
  try {
    const decoded = jwt.verify(token, secretKey);
    const userFound = await user.findOne({ where: { email: decoded.email } });

    if (!userFound) return res.status(NOT_FOUND).json({ message: 'user not found' });

    req.userId = userFound.id;
    next();
  } catch (err) {
    console.log(err.message);
    return res.status(UNAUTHORIZED).json({ message: err.message });
  }
};
