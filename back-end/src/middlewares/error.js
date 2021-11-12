module.exports = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(400).json({ message: 'Invalid credentials, try again' });
};
