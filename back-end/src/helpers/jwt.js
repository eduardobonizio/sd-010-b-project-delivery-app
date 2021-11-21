const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, '../../jwt.evaluation.key');

const secret = fs.readFileSync(caminho).toString().trim();

const jwtConfig = { expiresIn: '2h', algorithm: 'HS256' };

const newJwtToken = async (email) => jwt.sign({ data: email }, secret, jwtConfig);

const isTokenValid = async (token) => jwt.verify(token, secret);

module.exports = {
  secret,
  jwtConfig,
  newJwtToken,
  isTokenValid,
};
