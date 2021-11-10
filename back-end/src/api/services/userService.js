const { user } = require('../../database/models');

const existUser = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email, password } });
  if (userFound === null) {
    return { message: 'Usuário não encontrado' };
  }
  return userFound;
};

module.exports = { existUser };