const crypto = require('crypto');
const { User } = require('../../../database/models');
const { ApiError } = require('../../utils/ApiError');

const checkIfUserExist = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new ApiError('User does not exist', 404);
  return user;
};

const checkIfPasswordIsValid = async (userPassword, password) => {
  const cryptoPassword = crypto.createHash('md5').update(password).digest('hex');
  const isValid = userPassword === cryptoPassword;
  if (!isValid) throw new ApiError('Incorrect password', 401);
};

module.exports = {
  checkIfUserExist,
  checkIfPasswordIsValid,
};
