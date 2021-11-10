const { users } = require('../database/models')

const getAll = async () => {
  return await users.findAll();
};

module.exports = {
  getAll,
}