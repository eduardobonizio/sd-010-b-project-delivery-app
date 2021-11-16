const errorMessage = require('../errosCode/errosMessage');

const err = (statusCode) => ({ statusCode });

const validateSaller = (sallerId) => {
  if (!sallerId || !Number(sallerId)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validatePrice = (totalPrice) => {
  if (!totalPrice || !Number(totalPrice)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateAddress = (address) => {
  if (!address) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateNumber = (number) => {
  if (!number || !Number(number)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateProductId = (produtoId) => {
  if (!produtoId || !Number(produtoId)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateQuantity = (quantity) => {
  if (!quantity || !Number(quantity)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateId = (id) => {
  if (!id || !Number(id)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

const validateStatus = (status) => {
  const allStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
  if (!status || !allStatus.includes(status)) {
    throw err(errorMessage.INVALID_ENTRIES);
  }
};

module.exports = {
  validateSaller,
  validatePrice,
  validateAddress,
  validateNumber,
  validateProductId,
  validateQuantity,
  validateId,
  validateStatus,
};
