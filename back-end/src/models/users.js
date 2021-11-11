const { users } = require('../database/models');

const getAll = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

const getOne = async (email, password) => {
  const oneUser = await users.findOne({ where: { email, password } });
  return oneUser;
};

module.exports = {
  getAll,
  getOne,
};
