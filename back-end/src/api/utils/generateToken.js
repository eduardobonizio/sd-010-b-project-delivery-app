const jwt = require('jsonwebtoken');

const generateToken = (user) => {
      const { id, email, role } = user;
    const jwtConfig = {
      expiresIn: '10min',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ id, email, role }, process.env.JWT_SECRET, jwtConfig);

    return token;
};

module.exports = {
  generateToken,
};
