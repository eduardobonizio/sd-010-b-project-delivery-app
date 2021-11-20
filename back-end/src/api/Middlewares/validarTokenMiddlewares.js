const jwt = require('../jwt/jwtValidation');

const validToken = (req, res, next) => {
  const { authorization } = req.headers;
  const isValid = jwt.validateJwt(authorization);

  if (isValid.message) {
    return res.status(isValid.status).json(isValid.message);
  }

  req.userId = isValid.userId;

  next();
};

module.exports = {
  validToken,
};