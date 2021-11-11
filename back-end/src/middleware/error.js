const errosCode = require('../utils/errosCode/errosCode');

module.exports = (error, _req, res, _next) => {
  if (error.statusCode) {
    const { status, message } = errosCode[error.statusCode];
    return res.status(status).json({ message });
  }
  return res.status(500).json({ message: 'Error' });
};
