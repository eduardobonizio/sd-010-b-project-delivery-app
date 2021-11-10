// model que vai procurar o usuario no banco

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.length < 12) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 12 characters long' });
  }
  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!email.match(/\S+@\S+\.com/)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

// verificaçõesd o /login

const verifyDbUser = async (req, res, next) => {
  const { email } = req.body;
  const db = await User.findOne({ where: { email } });
  if (!db) return res.status(404).json({ message: 'Not found' });
  next();
};

const verifyNameDB = async (req, res, next) => {
  const { name } = req.body;
  const db = await User.findOne({ where: { name } });
  if (db) return res.status(404).json({ message: '"name" already exists' });
  next();
}

const verifyEmailDB = async (req, res, next) => {
  const { email } = req.body;
  const db = await User.findOne({ where: { email } });
  if (db) return res.status(404).json({ message: '"email" already exists' });
  next();
}

// procurar pelo id


module.exports = { 
  verifyName, 
  verifyEmail, 
  verifyPassword, 
  verifyDbUser,
  verifyNameDB,
  verifyEmailDB
};