const { Sale, SalesProduct } = require('../database/models');
const { hasProductById } = require('./productService');
const { 
  saleDataValidation, 
  saleProductsDataValidation } = require('../validations/saleValidation');

const hasProducts = async (productsId) => {
  const arrayOfPromises = productsId.map((productId) => hasProductById(productId));
  const isAllProductsValid = Promise.all(arrayOfPromises).then(
    (arrayOfResults) => arrayOfResults.every((result) => result),
  );
  return isAllProductsValid;
};

const createProductSale = async (saleProduct) => {
  await SalesProduct.create(saleProduct);
};

const createProductSaleByArray = async (arrayOfProducts, saleId) => {
  const tempSaleId = 'sale_id';
  const arrayOfPromises = arrayOfProducts.map((product) => 
    createProductSale({ ...product, [tempSaleId]: saleId }));

  Promise.all(arrayOfPromises);
};

const createSale = async (saleData) => {
  const thisSaleData = saleData;
  
  const dataValidateError = saleDataValidation(saleData);
  if (dataValidateError.error) return dataValidateError;

  const saleProductIds = await saleProductsDataValidation(saleData.products, hasProducts);
  if (saleProductIds.error) return saleProductIds;
  
  delete thisSaleData.products;
  const { id } = await Sale.create({ ...thisSaleData });
  createProductSaleByArray(saleProductIds.products, id);
  const newSale = await Sale.findByPk(id);
  return newSale;
};

const getAllSalesByCustomerId = async (id) => {
  const customerId = 'user_id';
  const foundAll = await Sale.findAll({ where: { [customerId]: id } });

  return foundAll;
};

module.exports = {
  createSale,
  getAllSalesByCustomerId,
};