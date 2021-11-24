const { registerValidateService } = require('../services/userService');

const registerController = async (req, _res, next) => {
  const { name, email, password } = req.body;

  const registerData = await registerValidateService(name, email, password);

  if (registerData.err) {
    return next(registerData.err);
  }  

  next();
};

module.exports = { registerController };
