const { users } = require('../database/models');

const getAll = async () => {
  const allUsers = await users.findAll();
  return allUsers 
};

module.exports = {
  getAll,
};
