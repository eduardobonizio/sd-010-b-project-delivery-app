const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, '../../jwt.evaluation.key');

const secret = fs.readFileSync(caminho).toString();

const jwtConfig = { expiresIn: '2h', algorithm: 'HS256' };

const newJwtToken = async (email, id) => jwt.sign({ data: { email, id } }, secret, jwtConfig);

const isTokenValid = async (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  secret,
  jwtConfig,
  newJwtToken,
  isTokenValid,
};
