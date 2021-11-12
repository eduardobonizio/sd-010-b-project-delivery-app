const rescue = require('express-rescue');
const userService = require('../services/userService');

const findAll = rescue(async (_req, res) => {
  const findUsers = await userService.findAll();
  return res.status(200).json(findUsers);
});

const add = rescue(async (req, res) => {
  const newUser = await userService.addUser(req.body);
  return res.status(200).json(newUser);
});

module.exports = {
  add,
  findAll,
};
