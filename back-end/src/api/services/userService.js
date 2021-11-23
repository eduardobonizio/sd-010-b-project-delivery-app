const md5 = require('md5');
const { User } = require('../../database/models');
const { validateUserData, checkIfUserExist } = require('./validations/userValidation');

const register = async (userInfo) => {
  await validateUserData(userInfo);
  const { name, email, password } = userInfo;
  await checkIfUserExist({ email, expectExist: false });
  const cryptPass = md5(password);
  const newUser = await User.create({ name, email, password: cryptPass, role: 'customer' });
  return newUser;
};

module.exports = {
  register,
};
