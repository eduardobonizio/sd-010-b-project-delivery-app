const user = require('./validationsUsers');
const sale = require('./validationsSales');

const createUser = async (name, email, password) => {
  user.validateName(name);
  user.validateEmail(email);
  user.validatePassword(password);
  await user.confirmUser(name, email);
};

const login = async (email, password) => {
  user.validateEmail(email);
  user.validatePassword(password);
  await user.confirmLogin(email, password);
};

const createSale = ({ sellerId, totalPrice, deliveryAddress, deliveryNumber }, cart) => {
  sale.validateSaller(sellerId);
  sale.validatePrice(totalPrice);
  sale.validateAddress(deliveryAddress);
  sale.validateNumber(deliveryNumber);
  cart.forEach(({ productId, quantity }) => {
    sale.validateProductId(productId);
    sale.validateQuantity(quantity);
  })
};

module.exports = { createUser, login, createSale };
