const userService = require('../services/userService');

const loginController = async(req, res) => {
  const {body} = req;
  const result = await userService.loginService(body);
  return res.status(result.status).json(result.message)
}