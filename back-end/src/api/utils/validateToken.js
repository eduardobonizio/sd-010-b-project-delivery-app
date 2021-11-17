const jwt = require('jsonwebtoken');
const fs = require('fs');

const validateToken = (token) => {
    const SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

    const payload = jwt.verify(token, SECRET);
    return payload;
};

module.exports = validateToken;
