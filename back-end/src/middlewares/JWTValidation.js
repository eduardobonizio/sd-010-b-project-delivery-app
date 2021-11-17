const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

let secret = fs
  .readFileSync(path.resolve('back-end', 'jwt.evaluation.key'), { encoding: 'utf8', flag: 'r' });

secret = secret.trim();

const { User } = require('../database/models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decode = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email: decode.data.email } });

    if (!user) return res.status(401).json({ message: 'Token\'s user not found' });

    req.user = user.dataValues;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};