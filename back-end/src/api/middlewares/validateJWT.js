const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
require('dotenv').config();

const secret = process.env.SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) { return res.status(400).json({ message: 'missing auth token' }); }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ email: decoded.data.email, password: decoded.data.password });

    if (!user) {
      return res.status(401).json({ message: 'Not Authorized' }); 
    }

    req.user = user;

    next();

  } catch (_err) {
    return res.status(402).json({ message: 'jwt malformed' });
  }
};

module.exports = validateJWT;