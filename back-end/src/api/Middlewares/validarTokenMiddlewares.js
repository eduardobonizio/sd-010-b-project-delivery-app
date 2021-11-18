const jwt = require('../jwt/jwtValidation');

const validToken = (req, res, next) => {
  const { authorization } = req.headers;
  const isValid = jwt.validateJwt(authorization);

  if (isValid.message) {
    return res.status(404).json(isValid.message);
  }
  next();
};

module.exports = {
  validToken,
};