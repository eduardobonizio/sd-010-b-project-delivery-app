const userService = require('../services/loginService');

const loginController = async (req, res) => {
  const { body } = req;
  const result = await userService.loginService(body);
  return res.status(result.status).json(result.message);
};

const registerController = async (req, res) => {
  const { body } = req;
  const newUser = await userService.createUser(body);
  return res.status(newUser.status).json(newUser.message);
}

module.exports = { 
  loginController,
  registerController,
};
