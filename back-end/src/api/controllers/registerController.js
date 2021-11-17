const rescue = require('express-rescue');
const registerService = require('../services/registerService');

const registerUser = rescue(async (req, res) => {
  const { name, email, password, role = 'customer' } = req.body;
  const newUser = await registerService.registerUser(name, email, password, role);
  const { error } = newUser;
  if (error) return res.status(error.status).json(error.message);
  return res.status(201).json(newUser);
});

module.exports = {
  registerUser,
};