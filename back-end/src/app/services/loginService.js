const md5 = require('md5');
const { User } = require('../../database/models');
const { validLogin } = require('../../middlewares/loginValidations');

const messageError = (status, message) => ({
  status,
  message,
});

const loginService = async (user) => {
  const { email, password } = user;
  const { error } = validLogin.validate(user);
  
  if (error) throw messageError(400, error.message);

  const passwordHash = md5(password);
  const validUser = await User.findOne({ where: { email, password: passwordHash } });
  
  if (validUser === null) {
    throw messageError(404, '404 - Not found');
  }
  
  return validUser;
};

module.exports = {
  loginService,
};