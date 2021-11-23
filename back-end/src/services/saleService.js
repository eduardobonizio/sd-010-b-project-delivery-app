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

const getOrderBySellerId = async (id) => {
  const sellerId = 'seller_id'; // utilizando para resolver o problema com snakecase.
  const result = await Sale.findAll({ where: { [sellerId]: id } });
  return result;
};

const getOrderAll = async () => {};
const getSallesAll = async () => {};
const updateOrderStatus = async () => {};
const updateSalesStatus = async () => {};

module.exports = {
  createSale,
  getOrderBySellerId,
  getOrderAll,
  getSallesAll,
  updateOrderStatus,
  updateSalesStatus,
};