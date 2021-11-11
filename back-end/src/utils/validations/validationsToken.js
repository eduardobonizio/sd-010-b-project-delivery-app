const jwt = require('jsonwebtoken');
const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();

const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw err(errorMessage.JWT_MALFORMED);
  }
};

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw err(errorMessage.MISSING_TOKEN);

  const payload = await verifyToken(token);

  req.userInfo = payload;
  next();
};
