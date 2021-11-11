const httpStatus = require('http-status');

module.exports = {
  invalidEntries: {
    status: httpStatus.BAD_REQUEST,
    message: 'Invalid entries. Try again.',
  },

  emailRegistred: {
    status: httpStatus.CONFLICT,
    message: 'Email already registered',
  },

  loginNotFilled: {
    status: httpStatus.UNAUTHORIZED,
    message: 'All fields must be filled',
  },

  loginIncorrect: {
    status: httpStatus.BAD_REQUEST,
    message: 'Incorrect username or password',
  },

  missingToken: {
    status: httpStatus.UNAUTHORIZED,
    message: 'missing auth token',
  },

  jwtMalformed: {
    status: httpStatus.UNAUTHORIZED,
    message: 'jwt malformed',
  },

  recipeNotFound: {
    status: httpStatus.NOT_FOUND,
    message: 'recipe not found',
  },
};
