const { validateLogin } = require('../schema/login.schema');

const loginValidation = async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const { code, message } = await validateLogin({ email, password });

  if (message) return res.status(code).json({ message });
  next();
};

module.exports = { loginValidation };
