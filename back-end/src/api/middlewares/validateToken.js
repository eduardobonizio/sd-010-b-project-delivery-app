const fs = require('fs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();

    if (!token) {
      return res.status(401).json({ error: 'Token não encontrado' });
    }

    jwt.verify(token, secretKey);
    next();
  } catch (error) {
      console.log(error);
      next({ status: StatusCodes.UNAUTHORIZED, message: error.message, code: 'invalid_data' });
  }
};
