const userService = require('../services/userService');

const loginController = async (req, res) => {
  console.log('oi controller');
  const { body } = req;
  const result = await userService.loginService(body);
  return res.status(result.status).json(result.message);
};

module.exports = { loginController };
