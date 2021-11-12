const { User } = require('../../database/models');

const loginService = async (req, res) => {
try {
  const { email, password } = req;

  const UserLogin = await User.findOne({ where: { email } });
  if (!UserLogin || UserLogin.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return UserLogin;
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

module.exports = {
  loginService,
};