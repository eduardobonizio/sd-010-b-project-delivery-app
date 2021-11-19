const {
  STATUS_BAD_REQUEST,
} = require('../utils/constants');

const DATA_IS_MISSING = {
  error: {
    status: STATUS_BAD_REQUEST,
    message: 'Some data is missing. Please check again',
  },
};

module.exports = {
  DATA_IS_MISSING,
};