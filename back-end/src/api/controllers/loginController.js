const { loginValidateService } = require('../services/userService');

const loginController = async (req, _res, next) => {
  const { email, password } = req.body;

  const loginData = await loginValidateService(email, password);

  if (loginData.err) {
    return next(loginData.err);
  }  

  next();
};

module.exports = { loginController };
