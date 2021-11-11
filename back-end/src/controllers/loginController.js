const userService = require('../services/loginService');
const rescue = require('express-rescue');


const loginController = rescue(async (req, res) => {
  const { body } = req;
  const result = await userService.loginService(body);
<<<<<<< HEAD
  return res.status(result.status).json({message: result.data});
=======
  return res.status(result.status).json({ message: result.data });
>>>>>>> cf5978e6a2069f008101f38cbb31985e310eb559
});

module.exports = { 
  loginController,
};

