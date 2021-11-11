const { User } = require('../../database/models');

const userService = async (req, res) => {
try {
  const { name, email, password, role } = req;
  const newUser = await User.create({ name, email, password, role });
   if (newUser) return newUser;
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};
module.exports = {
  userService,
};