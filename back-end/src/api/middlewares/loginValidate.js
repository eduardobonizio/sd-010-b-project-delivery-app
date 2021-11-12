const { StatusCodes } = require('http-status-codes')

module.exports = (req, res, next) => { 
  const { email, password } = req.body;   
  
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
    console.log(email);
    return  next({ err: { status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid email'}});
    }
  
    if (email === '') {
      return next({ err: { status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email cant be empty'}});
    }
  
    if (!email) {
      return next({ err: { status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Email is required'}});      
    } 
 
    if (password.length < 6) return next({ err: { status: StatusCodes.BAD_REQUEST, code: 'invalid_data', message: 'Invalid password'}});
}