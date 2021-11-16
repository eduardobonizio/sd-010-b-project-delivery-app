const md5 = require('md5');
// const { checkIfPasswordIsValid, getUser } = require('./validations/validation');
const { User } = require('../../database/models');

// const {ApiError} = require('../ut')
const { ApiError } = require('../utils/ApiError');

const login = async (body) => {
  const { email, password } = body;
  // await checkIfUserExist({ email, expectExist: true });
  const pass = md5(password);
  const user = await User.findOne({ where: { email, password: pass } });
  // const user = await getUser(email);
  if (!user) throw new ApiError('User does not exist', 404);
  // const pass = await checkIfPasswordIsValid(user.password, password);
  return user;
};

module.exports = {
  login,
};
