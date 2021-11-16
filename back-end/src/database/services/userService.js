const {User} = require('../models')

const getUserByEmailService = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
}

const createUserService = async ({name, email, password, role}) => {
  const result = await User.create({name, email, password, role});
  return result;
}

module.exports={
  getUserByEmailService,
  createUserService
}