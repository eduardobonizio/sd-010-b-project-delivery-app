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
  const validUser = await User.findOne({ where: { email, password } });
  
  if (validUser === null) {
    throw messageError(400, 'Invalid fields')
  }
  
  return validUser;
};


module.exports = {
  loginService,
};