const { checkUserLogin } = require('./userService');
const { checkUserExists } = require('./userService');
const { getAllProducts } = require('./productsService');
const { createUser } = require('./signUpService');
module.exports = { checkUserLogin, checkUserExists, getAllProducts, createUser }
