const Sequelize = require('sequelize');
const { sale, salesProducts } = require('../../database/models');

const env = process.env.NODE_ENV || 'test';
const config = require('../../database/config/config')[env];

const sequelize = new Sequelize(config);

const mapSalesProducts = (products, saleId) => 
  products.map(({ quantity, id }) => ({ productId: id, saleId, quantity }));

const createSaleTransaction = async (payload) => sequelize.transaction(async (t) => {
    const {
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products,
    } = payload;

    const { id: saleId } = await sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    }, { transaction: t });

    const salesProductsData = mapSalesProducts(products, saleId);

    await salesProducts.bulkCreate(salesProductsData, { transaction: t });
    return saleId;
  });

const create = async (salePayload) => {
  try {
    const result = await createSaleTransaction(salePayload);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
    // return 'deu ruim';
    // throw new Error(error.message);
    return error.message;
  }
};

module.exports = {
  create,
};
