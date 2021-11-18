const { StatusCodes } = require('http-status-codes');
const { User } = require('../models/user');

const mustBeValidEmail = '"email" must be valid';
const passwordRequired = '"password" is required';
const passwordUnderSixChar = '"password" must be at least 6 characters';
const userNotExists = 'User does not exists';

// Fonte regexEmail: https://regex-generator.olafneumann.org/?sampleText=2020-03-12T13%3A34%3A56.123Z%20INFO%20%20%5Borg.example.Class%5D%3A%20This%20is%20a%20%23simple%20%23logline%20containing%20a%20%27value%27.&flags=i&onlyPatterns=false&matchWholeLine=false&selection=
const emailValidation = async (req, res) => {
  const { email } = req.body;
  
  const regexEmail = /[a-zA-Z]+@[a-zA-Z]+/;
  if (!regexEmail.test(email)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: mustBeValidEmail });
  }

  const existsEmail = await User.findOne({ where: { email } });
  if (!existsEmail) return res.status(StatusCodes.BAD_REQUEST).json({ message: userNotExists });
};

const passwordValidation = async (req, res) => {
  const { password } = req.body;

  if (!password) return res.status(StatusCodes.BAD_REQUEST).json({ message: passwordRequired });

  if (password.length < 6) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: passwordUnderSixChar });
  }
};

module.exports = { emailValidation, passwordValidation };
