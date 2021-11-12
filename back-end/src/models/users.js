const { users } = require('../database/models');

const getAll = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

const login = async (email, password) => {
  const oneUser = await users.findOne({ where: { email, password } });
  return oneUser;
};

const register = async (name, email, password) => {
  const result = await users.findOrCreate({ 
    where: { email }, defaults: { name, email, password, role: 'customer' }
  })
  return result;

}

module.exports = {
  getAll,
  login,
  register,
};
