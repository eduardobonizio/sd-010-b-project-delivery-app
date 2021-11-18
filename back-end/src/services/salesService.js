const { sale } = require('../database/models');
const { createSalesProducts } = require('./salesProductsService');

const createSale = async (saleData, productsArray) => {
  const { id } = await sale.create(saleData);
  const saleId = 'sale_id';
  const productId = 'product_id';
  await productsArray.map(async (product) => {
    const payload = { 
      [saleId]: id, [productId]: product.id, quantity: product.qtd,
    };
    await createSalesProducts(payload);
  });
  return id;
};

const allSalesByUser = async (id) => {
  console.log('serviceSales', id);
  const userId = 'user_id';
  const sales = await sale.findAll({
    where: { [userId]: id },
    attributes: ['id', 'total_price', 'sale_date', 'status'],
  });
  return sales;
};

module.exports = {
    createSale,
    allSalesByUser,
};

// refatorar posteriormente para transação atômica (transaction)