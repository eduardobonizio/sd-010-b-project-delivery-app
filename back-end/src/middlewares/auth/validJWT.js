require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();
  
const { User } = require('../../database/models');

// const secret = process.env.JWT_SECRET || 'secret_key';
// const validToken = (req, _res, next) => {
//   const token = req.headers.authorization;
//   if (!token) throw messageError(401, 'Token not found');

//   jwt.verify(token, secret, (err, decoded) => {
//     if (err) throw messageError(401, 'Expired or invalid token');
   
//     req.payload = decoded;
//   });

//   const { payload } = req;

//   console.log(payload);
//   next();
// };

const validToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Token not provided' });

  jwt.verify(authHeader, secret, (err, decoded) => {
  if (err) return res.status(401).json({ message: 'Invalid Token' });
  req.payload = decoded;
  });
    const { payload } = req;
    const findEmail = await User.findOne({ where: { email: payload.email } });

    if (!findEmail) return res.status(401).json({ message: 'Invalid Token' });

    next();
};

module.exports = { validToken };