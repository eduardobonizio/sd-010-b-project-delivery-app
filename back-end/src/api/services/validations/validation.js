const crypto = require('crypto');
const { User } = require('../../../database/models');
const { ApiError } = require('../../utils/ApiError');

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const checkIfUserExist = async ({ email, expectExist }) => {
  const user = await getUser(email);
  if (expectExist && !user) throw new ApiError('User does not exist', 404);
  if (!expectExist && user) throw new ApiError('User already exists', 409);
  return user;
};

const encryptPassword = (password) => crypto.createHash('md5').update(password).digest('hex');

const checkIfPasswordIsValid = async (userPassword, password) => {
  const cryptoPassword = encryptPassword(password);
  const isValid = userPassword === cryptoPassword;
  if (!isValid) throw new ApiError('Incorrect password');
};

const createUser = async ({ name, email, password }) => {
  await checkIfUserExist({ email, expectExist: false });
  const cryptPass = encryptPassword(password);
  const newUser = await User.create({ name, email, password: cryptPass, role: 'customer' });
  return newUser;
};

module.exports = {
  checkIfUserExist,
  checkIfPasswordIsValid,
  createUser,
  getUser,
};
