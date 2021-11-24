const { users } = require('../database/models');

const getAll = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

const login = async (mail, password) => {
  const oneUser = await users.findOne({ where: { email: mail, password } });
  const { id, name, email, role } = oneUser;
  return { id, name, email, role };
};

const register = async (name, email, password, role) => {
  const result = await users.findOrCreate({ 
    where: { email }, defaults: { name, email, password, role },
  });
  return result;
};

const getByRole = async (role) => {
  const result = await users.findAll({where: { role }})

  return result;
}

module.exports = {
  getAll,
  login,
  register,
  getByRole,
};
