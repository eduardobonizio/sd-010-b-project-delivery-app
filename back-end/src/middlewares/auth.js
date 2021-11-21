const jwt = require('jsonwebtoken');

const secret = 'mySuperPassword';

const UNAUTHORIZED = 401;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(UNAUTHORIZED).json({
      message: 'Token not found',
    });
  }

  try {
    const decodification = jwt.verify(authorization, secret);
    req.user = decodification.data;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = { auth };
