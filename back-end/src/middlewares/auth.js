const { isTokenValid } = require('../helpers/jwt');

const UNAUTHORIZED = 401;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(UNAUTHORIZED).json({
      message: 'Token not found',
    });
  }

  try {
    const { data } = await isTokenValid(authorization);
    req.body.user = data;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = auth;
