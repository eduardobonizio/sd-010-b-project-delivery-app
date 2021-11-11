const jwt = require('jsonwebtoken');
const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();

const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };

module.exports = ({ id, name, email, role }) => {
  const token = jwt.sign({ id, name, email, role }, secret, jwtConfig);
  return token;
};
