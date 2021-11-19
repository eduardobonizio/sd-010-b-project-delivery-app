const fs = require('fs');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { User } = require('../../database/models');

module.exports = async (req, res) => {
  try {
    const { email } = req.body;
    const dataUser = await User.findOne({ where: { email } });

    const secretKey = fs.readFileSync('jwt.evaluation.key', 'utf-8').trim();
    
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    
    const { dataValues: { name, role } } = dataUser;

    const token = jwt.sign({ payload: { name, role, email } }, secretKey, jwtConfig);

    res.status(StatusCodes.OK).json(token);
  } catch (error) {
    console.log(error);
  }
};
