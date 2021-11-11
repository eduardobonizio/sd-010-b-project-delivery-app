const { User } = require('../../database/models');

const add = async (req, res) => {
  const { name, email, password, role } = req.body;

  await User.create({ name, email, password, role });

  return res.status(200).json('Rota User');
};

const findAll = async (req, res) => {
  const findUsers = await User.findAll();
  return res.status(200).json(findUsers);
};

module.exports = {
  add,
  findAll,
};
