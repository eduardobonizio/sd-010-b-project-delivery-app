const LoginService = require('../services/login');
 const { createJWT } = require('../Token/createToken');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const getUser = await LoginService.login({ email, password });
  if (!getUser) {
    return next('userDoesntExist');
  }

  const { id, ...getUserWithoutId } = getUser.dataValues;
  const token = createJWT(getUser);

  res.status(200).json({ ...getUserWithoutId, token });
};

module.exports = {
  login,
};