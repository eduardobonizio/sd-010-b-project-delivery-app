const { StatusCodes } = require('http-status-codes');

module.exports = (req, _res, next) => { 
  const { email } = req.body;

  if (email === '') {
    return next({
      status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email cant be empty' });
  }

  if (!email) {
    return next({
      status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email is required' });      
  }

  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
    return next({
      status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid email' });
  }

  next();
};
