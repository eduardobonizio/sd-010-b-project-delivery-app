const userService = require('../services/userService');
const rescue = require('express-rescue');

const registerUser = rescue(async (req, res) => {
  const { body } = req;
  const newUser = await userService.createUser(body);
  console.log(newUser);
  return res.status(newUser.status).json({ message: newUser.data });
});

module.exports = { 
  registerUser,
};
