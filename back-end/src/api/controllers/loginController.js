const { loginValidateService } = require('../services/userService');

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const loginData = await loginValidateService(email, password);

  if (loginData.err) {
    return next(loginData.err);
  }  

  return res.status(200).json(loginData);
};

module.exports = { loginController };
