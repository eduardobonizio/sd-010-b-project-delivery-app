const admService = require('../services/admService');
const { verifyToken } = require('../middlewares/middlewares');

const authValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'missing auth token' });
  try {
    const payload = verifyToken(authorization);
    req.payload = payload;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'jwt malformed' });
  }
};

const create = async (req, res) => {
  try {
    const newUser = await admService.create(req.body);
    if (newUser.err) {
      return res.status(newUser.err.status).json({ message: newUser.err.message });
    }
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { create, authValidation };