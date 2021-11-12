const { checkIfUserExist, checkIfPasswordIsValid, getUser } = require('./validations/validation');

const login = async (body) => {
  const { email, password } = body;
  await checkIfUserExist({ email, expectExist: true });
  const user = await getUser(email);
  await checkIfPasswordIsValid(user.password, password);
  return user;
};

module.exports = {
  login,
};
