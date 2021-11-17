const { StatusCodes } = require('http-status-codes');

module.exports = (req, _res, next) => { 
  const { name } = req.body;

  if (name.length < 12) {
    return next({
      status: StatusCodes.BAD_REQUEST, 
      code: 'invalid_data',
      message: 'Name length must be higher than 12 characters' });
  }

  next();
};
