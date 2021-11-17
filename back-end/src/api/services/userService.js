const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const { User } = require('../../database/models');

const loginValidateService = async (email, password) => {
  const hashPassword = md5(password);
  const validUser = await User.findOne({ where: { email, password: hashPassword } });  
  
  if (!validUser) {
    return { err: { 
      status: StatusCodes.NOT_FOUND, 
      code: 'not_found',
      message: 'Email or password are invalid' } }; 
  }  

  return validUser;
};

module.exports = {
  loginValidateService,
};
