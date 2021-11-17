const { registerValidateService } = require('../services/userService');

const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;

  const registerData = await registerValidateService(name, email, password);

  if (registerData.err) {
    return next(registerData.err);
  }  

  return res.status(201).json(registerData);
};

module.exports = { registerController };
