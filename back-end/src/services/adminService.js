const { validationUserByAdmin } = require('../utils/validateUser');
var MD5 = require('md5');
const { User } = require('../database/models');
const { createJWT } = require('../auth/JWToken');

const getAllUserByAdmin = async() =>{
  const allUsers = await User.findAll();
  return {status: 200, data: allUsers}
}

const registerUserByAdmin = async (body) => {
  const { name, email, password, role } = body;
  validationUserByAdmin(body);
  const passwordCripto = MD5(password);
  const newUser = await User.create({ name, email, password: passwordCripto, role });
  const { id } = newUser;
  const token = createJWT({ id, role });
  return { status: 201, data: {id, name, email, role, token} }
};

const updateUserByAdmin = async (body, user_id) => {
  const { name, email, password, role } = body;
  validationUserByAdmin(body);
  const passwordCripto = MD5(password);
  const updateUser = await User.findOneAndUpdate({user_id},
    { name, email, password: passwordCripto, role });
  const { id } = updateUser.value;
  const token = createJWT({ id, role });
  return { status: 201, data: {id, name, email, role, token} }
};

const deleteUserByAdmin = async (user_id) => {
  const deleteUser = await User.findOneAndDelete({user_id});
  if (!deleteUser.value) return { status: 404, data:'Ocorreu um erro ao deletar o usuario'};
  return { status: 201, data: deleteUser.value }
};

module.exports = { 
  getAllUserByAdmin,
  registerUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin
 }