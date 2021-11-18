const jwt = require('../jwt/jwtValidation');

const validToken = (req, res, next) => {
  const { authorization } = req.headers;
  const result = jwt.validateJwt(authorization);
  console.log(result);
  next();
};

module.exports = {
  validToken,
};