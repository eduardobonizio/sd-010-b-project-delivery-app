class ApiError extends Error {
  constructor(message, statusCode) {
    super();
    this.statusCode = statusCode || 500;
    this.message = message || 'Algo deu errado :(';
  }
}

module.exports = {
  ApiError,
};
