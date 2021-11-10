const validateUser = require('../auth/validateUser');
var MD5 = require('md5');
const { User } = require('../database/models');

const loginService = async ({ email, password }) => {
  const getToken = await User.findOne({ where: { email, password } });
  if (!getToken) return { status: 404, message: 'User not found' };
  return { status: 201, message: getToken };
};

const createUser = async (body) => {
  const { name, email, password } = body;
  // validação do nome email e password
  validateUser.validationUser(body);
  // verificação se existe name ou email no bd
  await validateUser.verifyUser(name, email);
  // criptografar o password
  const passwordCripto = MD5(password);
  // criar usuário no banco
  const newUser = await User.create({ name, email, passwordCripto });
  const { id } = newUser;
  const token = createJWT({ id });
  return { status: 201, message: token }
};

module.exports = {
  loginService,
  createUser,
}
