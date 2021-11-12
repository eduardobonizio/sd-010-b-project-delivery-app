const { loginService } = require('../services/loginService');

const login = async (req, res) => {
  try {
    const result = await loginService(req.body, res);
    if (!result) return res.status(400).json(result);
    return res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

module.exports = {
  login,
};
