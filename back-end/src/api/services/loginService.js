const { checkIfUserExist } = require('./validations/validation');

const login = async (body) => {
  const { email } = body;
  const user = await checkIfUserExist(email);
  return user;
};

module.exports = {
  login,
};
