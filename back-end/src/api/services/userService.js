const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
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

const registerValidateService = async (name, email, password) => {
  const hashPassword = md5(password);

  const userExists = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });  

  if (userExists) {
    return { err: { 
      status: StatusCodes.CONFLICT, 
      code: 'conflict',
      message: 'Email or name already exists' } }; 
  }

  const userData = await User.create({ name, email, password: hashPassword, role: 'customer' });  

  return userData;
};

const getAllSellersService = () => User
  .findAll({ where: { role: 'seller' }, attributes: { exclude: ['password'] } });

module.exports = {
  loginValidateService,
  registerValidateService,
  getAllSellersService,
};
