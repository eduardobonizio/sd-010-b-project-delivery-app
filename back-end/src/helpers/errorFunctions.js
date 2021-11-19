const {
  STATUS_BAD_REQUEST,
  NOT_FOUND,
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

const dataMustBeArray = (data) => ({
  error: {
    status: STATUS_BAD_REQUEST,
    message: `"${data}" must be an array`,
  },
});

const dataNotFound = (data, complement = '') => ({
  error: {
    status: NOT_FOUND,
    message: `${data} not found${complement}`,
  },
});

module.exports = {
  dataIsRequired,
  dataIsUnauthorized,
  dataMustBeArray,
  dataNotFound,
};