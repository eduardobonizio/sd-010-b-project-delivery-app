const userService = require('../Services/loginService');

const internalServerErrorMessage = 'Erro interno';

const loginUser = async (req, res) => {
  const { body } = req;
  try {
    const login = await userService.loginUser(body);

    if (login.message) {
      return res.status(404).json(login.message);
    }

    return res.status(200).json(login);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(internalServerErrorMessage);
  }
  };

module.exports = {
  loginUser,
};
