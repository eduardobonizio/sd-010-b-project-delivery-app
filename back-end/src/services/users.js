const Model = require('../models/users');

const login = async (email, pass) => {
  try {
    const user = await Model.login(email, pass);
    if (!user) {
      throw new Error('Login invalido');
    }
    return user;
  } catch (error) {
    throw new Error('Login invalido');
  }
};

const register = async (name, email, password, role = 'customer') => {
  try {
    const [user, created] = await Model.register(name, email, password, role);
    if (created) return user;
    throw new Error('Usuário já cadastrado');
  } catch (error) {
    throw new Error('Usuário já cadastrado');
  }
};

module.exports = {
  getAll: Model.getAll,
  login,
  register,
  getByRole: Model.getByRole,
};
