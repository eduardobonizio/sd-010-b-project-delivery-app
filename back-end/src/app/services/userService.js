const { User } = require('../../database/models');
const { validUser } = require('../../middlewares/userValidations');
const md5 = require('md5');

const messageError = (status, message) => ({
  status,
  message,
});

const findAll = async () => {
  const findAllUsers = await User.findAll();
  return findAllUsers;
};

const addUser = async (bodyCategory) => {
  const { error } = validUser.validate(bodyCategory);
  if (error) throw messageError(409, '409 - Conflict');
  const { name, email, password, role } = bodyCategory

  const password_hash = md5(password);

  const newUser = await User.create({ name, email, password: password_hash, role });
  return newUser;
};

module.exports = {
  addUser,
  findAll,
};
