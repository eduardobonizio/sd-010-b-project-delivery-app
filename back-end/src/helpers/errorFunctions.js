const {
  STATUS_BAD_REQUEST,
} = require('../utils/constants');

const dataIsRequired = (data) => ({
    error: {
      status: STATUS_BAD_REQUEST,
      message: `"${data}" is required`,
    },
  });

const dataIsUnauthorized = (data) => ({
    error: {
      status: STATUS_BAD_REQUEST,
      message: `"${data}" can't be post on`,
    },
  });

module.exports = {
  dataIsRequired,
  dataIsUnauthorized,
};