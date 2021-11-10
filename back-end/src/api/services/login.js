const loginModel = require('../../database/models/user');

const login = async () => {
  const result = await loginModel.login();
  return result; 
};

module.exports = {
  login,
};