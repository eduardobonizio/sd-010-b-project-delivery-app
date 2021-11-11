const { getAll, getOne } = require('../models/users');

const login = async (email, pass) => {
  try {
    const user = await getOne(email, pass);
    if (!user) {
      throw new Error('Login invalido');
    }
    return user;
  } catch (error) {
    throw new Error('Login invalido');
  }
};

module.exports = {
  getAll,
  login,
};
