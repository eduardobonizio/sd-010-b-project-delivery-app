const md5 = require('md5');
const { user } = require('../../database/models');

const checkUser = async ({ name, email }) => {
  const check = await user.findOne({
    where: { name, email },
  });

  if (!check) return false;

  return true;
};

const registerUser = async ({ name, password, email, role = 'user' }) => {
  const newPassword = md5(password);

  console.log(newPassword);

  const register = await user.create({ name, password: newPassword, email, role });
  
  console.log(register);

  if (!register) return false;

  return { name, email, password: newPassword }; 
};

module.exports = {
  registerUser,
  checkUser,
};
