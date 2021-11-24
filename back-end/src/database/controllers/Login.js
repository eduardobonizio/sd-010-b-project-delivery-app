const { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status');
const jwt = require('jsonwebtoken');
const Login = require('../services/Login');

const attemptLogin = async (req, res) => {
  try {
    const { body: loginInfo } = req;
    const result = await Login.attemptLogin(loginInfo);

    return result.message
      ? res.status(NOT_FOUND).json(result)
      : res.status(OK).json(result);
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({ message: error });
  }
};

module.exports = { attemptLogin };