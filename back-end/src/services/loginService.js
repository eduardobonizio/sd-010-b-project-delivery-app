const { createJWT } = require('../auth/JWToken');
const { User } = require('../database/models');
const { checkLogin } = require('../utils/validateUser');

const loginService = async ({ email, password }) => {
  
  checkLogin(email, password);
  
  const getToken = await User.findOne({ where: { email, password } });

  if (!getToken) return { status: 404, message: "Usuário ou senha incorreto" };
  const { name, role, id } = getToken;
  const token = createJWT({ id, role });

  return { status: 200, data: {id, name, email, role, token} };
};

module.exports = { loginService };
