const Sequelize = require('sequelize');
const { sale, salesProduct } = require('../../database/models');

const env = process.env.NODE_ENV || 'test';
const config = require('../../database/config/config')[env];

const sequelize = new Sequelize(config);

const mapSalesProducts = (products, saleId) => 
  products.map(({ quantity, id }) => ({ productId: id, saleId, quantity }));

const createSaleTransaction = async (payload) => sequelize.transaction(async (t) => {
    const { products, ...saleTablePayload } = payload;

    const { id: saleId } = await sale.create({ ...saleTablePayload }, { transaction: t });

    const salesProductsData = mapSalesProducts(products, saleId);

    await salesProduct.bulkCreate(salesProductsData, { transaction: t });
    return saleId;
  });

const create = async (reqPayload) => {
  try {
    const result = await createSaleTransaction(reqPayload);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllSales = async (id, role) => {
  const query = { where: { userId: id } };
  if (role === 'seller') {
    const roleSeller = { where: { sellerId: id } };
    return sale.findAll(roleSeller);
  }
  
  const allSales = await sale.findAll(query);
  // if (allSales.length === 0) return { message: 'No momento você não possui compras' };

  return allSales;
};

module.exports = {
  create,
  getAllSales,
};
