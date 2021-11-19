const fs = require('fs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf-8');

    if (!token) {
      return res.status(401).json({ error: 'Token não encontrado' });
    }

    jwt.verify(token, secretKey);
  } catch (error) {
      console.log(error);
      res.status(StatusCodes.UNAUTHORIZED).json({ error: error.message });
  }
  
  next();
};
