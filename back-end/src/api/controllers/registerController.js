const rescue = require('express-rescue');
const registerService = require('../services/registerService');
// const createToken = require('../middlewares/createToken');

const registerUser = rescue(async (req, res) => {
  const { name, email, password, role = 'customer' } = req.body;
  const newUser = await registerService.registerUser(name, email, password, role);
  // const token = await createToken({ name, email, role });
  const { error } = newUser;
  if (error) return res.status(error.status).json(error.message);
  return res.status(201).json({ name, email, role });
});

module.exports = {
  registerUser,
};