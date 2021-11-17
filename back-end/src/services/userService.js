const { validationUser, verifyUser } = require('../utils/validateUser');
var MD5 = require('md5');
const { User } = require('../database/models');
const { createJWT } = require('../auth/JWToken');

const createUser = async (body) => {
  const { name, email, password } = body;
  validationUser(body);
  await verifyUser(name, email);
  
  const passwordCripto = MD5(password);

  const newUser = await User.create({ name, email, password: passwordCripto, role:'customer' });
  const { id, role } = newUser;
  const token = createJWT({ id, role });
  return { status: 201, data: {id, name, email, role, token} }
};

const getSellers = async() =>  User.findAll({ where: { role: 'seller' } });

module.exports = { createUser, getSellers }
