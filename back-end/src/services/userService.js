const { user } = require('../database/models');

const { generateToken, encode } = require('../middlewares/middlewares');

const findUserName = async (name) => {
  const nameExists = await user.findOne({ where: { name } });
  if (nameExists !== null) {
    return { err: {
      status: 409,
      message: 'User already registered',
    } };
  }
  return false;
};

const findEmail = async (email) => {
  const emailExists = await user.findOne({ where: { email } });
  if (emailExists !== null) {
    return { err: {
      status: 409,
      message: 'Email already registered',
    } };
  }
  return false;
};

const login = async ({ email, password: userPassword }) => {
  const password = encode(userPassword);
  
  const userExistes = await user.findOne({ where: { email, password } });
   if (userExistes === null) {
    return { err: {
      status: 404,
      message: 'User Not Found',
    } };
  }
  const userInfo = userExistes.dataValues;
  const token = generateToken(userExistes);
  const response = { name: userInfo.name, email, role: userInfo.role, token };
  return response;
};

const create = async ({ name, email, password: userPassword }) => {
  const emailExists = await findEmail(email);
  if (emailExists.err) return emailExists;

  const nameExists = await findUserName(name);
  if (nameExists.err) return nameExists;
  
  const password = encode(userPassword);
  const role = 'customer';
  const { id } = await user.create({ name, email, password, role });
  
  const token = generateToken({ id, name, email, role });
  return token;
};

const getAll = async () => {
  const users = await user.findAll({ 
    attributes: { exclude: ['password'] } });
  return users;
};

const findUserByEmail = async (email) => {
  const { id } = await user.findOne({ where: { email } });
  return id;
};

module.exports = {
  findUserName,
  login,
  findEmail,
  create,
  getAll,
  findUserByEmail,
};
