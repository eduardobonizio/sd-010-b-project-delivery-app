module.exports = (err, req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({ messageme: err.message });
  }
};
