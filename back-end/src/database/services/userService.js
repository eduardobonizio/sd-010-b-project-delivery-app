const {User} = require('../models')

const getUserByEmailService = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
}

const createUserService = async ({name, email, password, role}) => {

}

module.exports={
  getUserByEmailService,
  createUserService
}