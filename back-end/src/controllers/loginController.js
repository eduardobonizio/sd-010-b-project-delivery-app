const userService = require('../services/loginService');
const rescue = require('express-rescue');

const loginController = rescue(async (req, res) => {
  const { body } = req;
  const result = await userService.loginService(body);
  return res.status(result.status).json({ message: result.data });
});

module.exports = { 
  loginController,
};

