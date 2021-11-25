const jwt = require('jsonwebtoken');
const fs = require('fs');

const generateToken = (user) => {
    const { id, email, role } = user;
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

    const token = jwt.sign({ id, email, role }, SECRET, jwtConfig);

    return token;
};

module.exports = generateToken;
