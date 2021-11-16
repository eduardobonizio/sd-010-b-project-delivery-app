const rescue = require('express-rescue');
const userService = require('../services/userService');

const findAll = rescue(async (_req, res) => {
  const findUsers = await userService.findAll();
  // delete findUsers.password;
  // console.log('controller', findUsers);
  return res.status(200).json(findUsers);
});

const findById = rescue(async (req, res) => {
  const findId = await userService.findById(req.params.id);
  return res.status(200).json(findId);
});

const add = rescue(async (req, res) => {
  const result = await userService.addUser(req.body);
  return res.status(201).json(result);
});

module.exports = {
  add,
  findAll,
  findById,
};
