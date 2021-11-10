const { users } = require('../database/models');

const getAll = async () => {
  allUsers = await users.findAll();
  return allUsers 
};

module.exports = {
  getAll,
};
