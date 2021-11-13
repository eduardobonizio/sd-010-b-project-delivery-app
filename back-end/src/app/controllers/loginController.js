 const rescue = require('express-rescue');
const { loginService } = require('../services/loginService');

const login = rescue(async (req, res) => {  
  const user = req.body; 
  
  const validUser = await loginService(user);

  return res.status(200).json(validUser);
});

module.exports = {
  login,
};
