const { users } = require('../database/models')

const getAll = async () => {
  console.log(await users.findAll());
  return await users.findAll();
};

module.exports = {
  getAll,
}