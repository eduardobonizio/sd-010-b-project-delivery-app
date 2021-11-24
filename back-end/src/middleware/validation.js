const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
  next();
};

module.exports = validateToken;
