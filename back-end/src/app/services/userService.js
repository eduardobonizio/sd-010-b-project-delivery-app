const { User } = require('../../database/models');
const { validUser } = require('../../middlewares/userValidations');

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
  
  if (error) throw messageError(417, error.message);

  const newUser = await User.create(bodyCategory);
  return newUser;
};

module.exports = {
  addUser,
  findAll,
};