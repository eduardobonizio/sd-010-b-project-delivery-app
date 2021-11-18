const fs = require('fs');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf-8');
    const user = '';
  
    const jwtConfig = {
      expiresIn: '1hr',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: user }, secretKey, jwtConfig);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
  
  next();
};
