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

module.exports = {
  getAll: Sales.getAll,
  getById,
  create: Sales.createSales,
};
