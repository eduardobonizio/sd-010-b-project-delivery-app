const { User } = require('../../database/models');
const { userService } = require('../services/userService');

const add = async (req, res) => {
  // const { name, email, password, role } = req.body;

  const result = await userService(req.body, res);
  
  if (!result) return res.status(400).json(result);

  return res.status(200).json(result);
};

const findAll = async (req, res) => {
  const findUsers = await User.findAll();
  return res.status(200).json(findUsers);
};

module.exports = {
  add,
  findAll,
};
