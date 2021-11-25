const Sales = require('../models/sales');

const getById = async ({ id }) => {
  try {
    const sale = await Sales.getById(id);

    return sale;
  } catch (error) {
    console.log(error);
    return { message: 'No Content', code: 204 };
  }
};

const getByUserId = async ({ id }) => {
  try {
    const sale = await Sales.getByUserId(id);

    return sale;
  } catch (error) {
    console.log(error);
    return { message: 'No Content', code: 204 };
  }
};

const getBySellerId = async ({ id }) => {
  try {
    const sale = await Sales.getBySellerId(id);

    return sale;
  } catch (error) {
    console.log(error);
    return { message: 'No Contents', code: 204 };
  }
};

module.exports = {
  getAll: Sales.getAll,
  getById,
  create: Sales.createSales,
  getByUserId,
  getBySellerId,
};
