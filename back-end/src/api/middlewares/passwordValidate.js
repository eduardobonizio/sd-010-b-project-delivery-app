const { StatusCodes } = require('http-status-codes');

module.exports = (req, _res, next) => { 
  const { password } = req.body;

  if (password.length < 6) { 
    return next(
      { status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid password' },
    ); 
  }

  next();
};
