const { checkIfUserExist, checkIfPasswordIsValid } = require('./validations/validation');

const login = async (body) => {
  const { email, password } = body;
  const user = await checkIfUserExist(email);
  await checkIfPasswordIsValid(user.password, password);
  return user;
};

module.exports = {
  login,
};
