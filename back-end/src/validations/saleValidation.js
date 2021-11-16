/* eslint-disable camelcase */
const { dataIsRequired, dataIsUnauthorized } = require('../helpers/errorFunctions');
// Using 'saleAlias' cuz eslint won't allow to use camel_case var, so can't create an object with camel_case key.
const saleKeyValidation = (saleKey, saleAlias) => {
  if (!saleKey) return dataIsRequired(saleAlias);

  return {};
};

const saleDataValidationErrorFormatter = (saleDataMessages) => ({
    error: {
      status: saleDataMessages.map((error) => error.status)[0],
      message: saleDataMessages.map((error) => error.message),
    },
  });

const saleDataErrorFilter = (dataObj) => dataObj
    .filter((obj) => obj.require.error)
    .map((obj) => obj.require.error);

const saleDataValidation = (saleData) => {
  // sale_date: saleDate, cuz eslint camel_case problem
  const { 
    user_id, seller_id, total_price, delivery_address, delivery_number, sale_date: saleDate, status,
  } = saleData;

  const saleRequireObjArray = [
    { require: saleKeyValidation(user_id, 'user_id') },
    { require: saleKeyValidation(seller_id, 'seller_id') },
    { require: saleKeyValidation(total_price, 'total_price') },
    { require: saleKeyValidation(delivery_address, 'delivery_address') },
    { require: saleKeyValidation(delivery_number, 'delivery_number') },
  ];
  
  if (saleDate) return dataIsUnauthorized('sale_date');
  if (status) return dataIsUnauthorized('status');

  const foundRequireErrorMessages = saleDataErrorFilter(saleRequireObjArray);
  if (foundRequireErrorMessages.length > 0) {
    return saleDataValidationErrorFormatter(foundRequireErrorMessages);
  }

  return {};
};

module.exports = {
  saleDataValidation,
};