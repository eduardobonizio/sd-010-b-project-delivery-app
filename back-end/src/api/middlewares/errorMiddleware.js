const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.status && err.code) {
    return res.status(err.status).json({ err: { code: err.code, message: err.message } });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};
