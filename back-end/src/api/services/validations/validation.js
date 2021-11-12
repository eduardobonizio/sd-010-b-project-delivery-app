const crypto = require('crypto');
const { User } = require('../../../database/models');
const { ApiError } = require('../../utils/ApiError');

const checkIfUserExist = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new ApiError('User does not exist', 404);
  return user;
};

const encryptPassword = (password) => crypto.createHash('md5').update(password).digest('hex');

const checkIfPasswordIsValid = async (userPassword, password) => {
  const cryptoPassword = encryptPassword(password);
  const isValid = userPassword === cryptoPassword;
  if (!isValid) throw new ApiError('Incorrect password');
};

const checkAndCreateUser = async ({ name, email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (user) throw new ApiError('User already exists', 409);
  const cryptPass = encryptPassword(password);
  const newUser = await User.create({ name, email, password: cryptPass, role: 'customer' });
  return newUser;
};

module.exports = {
  checkIfUserExist,
  checkIfPasswordIsValid,
  checkAndCreateUser,
};
