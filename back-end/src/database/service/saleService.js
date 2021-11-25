const { sale, salesProduct } = require('../models');
// console.log('sale', typeof salesProduct);

const createSale = async (total_price, delivery_address, delivery_number, sale_date, user_id, seller_id, arrayProd) => {
  // const saleDate = String(sale_date);
  const create = await sale.create({ total_price, delivery_address, delivery_number, sale_date, status: 'Pendente', seller_id, user_id });
  // console.log('type sale', create.dataValues);
  const saleId = create.dataValues.id;
  arrayProd.forEach(async ({ id, quantity }) => {
    await salesProduct.create({ sale_id: saleId, product_id: id, quantity });
  })
  return create;
};

const getAllSales = async () => {
  const getSales = await sale.findAll();
  return getSales;
};

module.exports = { createSale, getAllSales};
