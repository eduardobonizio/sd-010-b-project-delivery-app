const { User } = require('../../../database/models');
const { ApiError } = require('../../utils/ApiError');

const checkIfUserExist = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new ApiError('User does not exist', 404);
  return user;
};

module.exports = {
  checkIfUserExist,
};
