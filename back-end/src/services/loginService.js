const { createJWT } = require('../auth/JWToken');
const { User } = require('../database/models');
const { checkLogin } = require('../utils/validateUser');
var MD5 = require('md5');

const loginService = async ({ email, password }) => {
  checkLogin(email, password);
  const passwordCripto = MD5(password);
  const getToken = await User.findOne({ where: { email, password: passwordCripto } });

  if (!getToken) return { status: 404, data: "Usuário ou senha incorreto" };
  const { name, role, id } = getToken;
  const token = createJWT({ id, role });

  return { status: 200, data: {id, name, email, role, token} };
};

module.exports = { loginService };
