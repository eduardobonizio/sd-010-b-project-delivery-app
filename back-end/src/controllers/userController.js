const userService = require('../services/userService');
const { getSellers } = require('../services/userService');
const rescue = require('express-rescue');

const registerUser = rescue(async (req, res) => {
  const { body } = req;
  const newUser = await userService.createUser(body);
  return res.status(newUser.status).json(newUser.data);
});

const getAllSellers = rescue(async (req, res) => {
  const sellers = await getSellers();
  return res.status(sellers.status).json([sellers.data]);
})

module.exports = { 
  registerUser,
  getAllSellers,
};
