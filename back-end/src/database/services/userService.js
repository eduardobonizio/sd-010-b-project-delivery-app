const {User} = require('../models')

const getUserByEmailService = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
}

module.exports={
  getUserByEmailService,
}