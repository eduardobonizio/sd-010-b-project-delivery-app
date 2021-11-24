const jwt = require('jsonwebtoken');
const fs = require('fs');

const getSecret = () => {
  const evaluationKey = '../back-end/jwt.evaluation.key';

  try {
    const data = fs.readFileSync(evaluationKey, 'utf-8').trim();
    return data;
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${error.path}`);
    console.log(error);
  }
};

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign({ data: payload }, getSecret(), jwtConfig);
const validateJwt = (req, res, next) => {

};

module.exports = {
  createToken,
};