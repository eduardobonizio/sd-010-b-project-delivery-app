const jwt = require('jsonwebtoken');

// Aqui fica jwt.evaluation.key ?
const SECRET = process.env.JWT_SECRET;

const decodeToken = (token) => jwt.verify(token, SECRET);

module.exports = decodeToken;