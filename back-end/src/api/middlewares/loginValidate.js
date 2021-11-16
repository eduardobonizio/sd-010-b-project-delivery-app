const { StatusCodes } = require('http-status-codes')

module.exports = (req, res, next) => { 
  const { email, password } = req.body;   

  if (email === '') {
    return next({ status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email cant be empty'} );
  }

  if (!email) {
    return next({ status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email is required'} );      
  }

  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
    console.log(email);
    return  next({ status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid email'});
  }

  if (password.length < 6) return next({  status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid password'} );

    next();
}