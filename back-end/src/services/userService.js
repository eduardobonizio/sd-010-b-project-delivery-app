const { validationUser, verifyUser } = require('../utils/validateUser');
var MD5 = require('md5');
const { User } = require('../database/models');

const createUser = async (body) => {
  const { name, email, password } = body;
  // validação do nome email e password
  validationUser(body);
  // verificação se existe name ou email no bd
  await verifyUser(name, email);
  // criptografar o password
  const passwordCripto = MD5(password);
  // criar usuário no banco
  const newUser = await User.create({ name, email, passwordCripto });
  const { id, role } = newUser;
  const token = createJWT({ id, role });
  // retornar as informações completas do usuário para armazenar no localStorage
  // name, email, role, token. (detalhes no requisito 13)
  return { status: 201, data: {id, name, email, role, token} }
};

module.exports = {
  createUser,
}
