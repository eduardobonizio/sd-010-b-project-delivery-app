const { validateUserData } = require('./validations/userValidation');
const { createUser } = require('./validations/validation');

const register = async (body) => {
  await validateUserData(body);
  const user = await createUser(body);
  return user;
};

module.exports = {
  register,
};
