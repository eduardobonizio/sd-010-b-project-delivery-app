const rescue = require('express-rescue');
const { User } = require('../database/models');
const CustomError = require('../utils/CustomerError');
const decodeToken = require('../utils/decodeToken');

const validateJWT = rescue(async (req, _res) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new CustomError('Token not found', 401);
  }

  // dentro do token vem id e role
  const decoded = decodeToken(token);
  const { id, role } = decoded;
  console.log(decoded);
  
  // verificar se o id é encontrado no bd
  const findUserById = await User.findOne({ where: { id } });
  if(!findUserById) throw new CustomError('Expired or invalid token', 401)
  
  req.user = role;
});

module.exports = validateJWT;