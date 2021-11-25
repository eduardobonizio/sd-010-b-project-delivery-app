const jwt = require('jsonwebtoken');
const fs = require('fs');
const { ApiError } = require('./ApiError');

const validateToken = (token) => {
    const SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

    try {
        const payload = jwt.verify(token, SECRET);
        return payload;
    } catch (e) {
        throw new ApiError('Invalid Token', 401);
    }
};

module.exports = validateToken;
