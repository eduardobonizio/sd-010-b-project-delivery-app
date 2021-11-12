const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!(password && password.length > 5)) {
    return res.status(400).json({ message: 'Review your password entry' });
  }
  next();
};

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (!(name && name.length > 11)) {
    return res.status(400).json({ message: 'Review your name entry' });
  }
  next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!(email && /[\w.-]+@[a-zA-Z]+\.+[a-zA-Z]+/i.test(email))) {
    return res.status(400).json({ message: 'Review your email entry' });
  }
  next();
};

module.exports = {
  verifyPassword,
  verifyName,
  verifyEmail,
};
