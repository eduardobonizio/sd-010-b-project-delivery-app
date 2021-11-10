const jwt = require('jsonwebtoken');

const SECRET = 'minhasenhasecreta';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const { id } = decoded;
    
    req.user = id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};