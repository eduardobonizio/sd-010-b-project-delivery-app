const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET  || 'minhaSenha';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id, role } = decoded;

    const findUserById = await User.findOne({ where: { id } });
    if(!findUserById) return res.status(401).json({ message: 'User not found' });
    
    req.user = { id, role };
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};


module.exports = validateJWT;