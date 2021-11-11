const jwt = require('jsonwebtoken');
require('dotenv').config();

// Aqui ficaria jwt.evaluation.key ?
const secret = process.env.JWT_SECRET || 'minhaSenha';

// Huggo Parcelly: modificação na estrutura do createJWT
// criação de um config e coloquei retorno direto

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const createJWT = (payload) => jwt.sign(payload, secret, jwtConfig);


module.exports = { createJWT };
