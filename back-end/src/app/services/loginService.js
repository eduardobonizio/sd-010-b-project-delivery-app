const md5 = require('md5');
const { User } = require('../../database/models');
const { validLogin } = require('../../middlewares/loginValidations');
const { jwtLogin } = require('../../middlewares/auth/tokenJWT');
// const { serialize } = require('./utils/serialize');

const messageError = (status, message) => ({
  status,
  message,
});

const loginService = async (user) => {
  const { email, password } = user;
  const { error } = validLogin.validate(user);
  
  if (error) throw messageError(400, error.message);

  const passwordHash = md5(password);
  const validUser = await User
  .scope('withoutPassword')
  .findOne({ where: { email, password: passwordHash } });
  
  if (!validUser) {
    throw messageError(404, '404 - Not found');
  }
  
  const { name, email: emailUser, role } = validUser;
  const payload = { email, role };
  const token = jwtLogin(payload);
  // console.log(token);

  const result = { name, email: emailUser, role, token };
  // console.log(result);
  return result;
};

module.exports = {
  loginService,
};
