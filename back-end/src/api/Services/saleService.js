const Sequelize = require('sequelize');
const { sale, salesProduct, product, user } = require('../../database/models');

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

const getAllSales = async (id) => {
  const query = { where: { userId: id } };

  const allSales = await sale.findAll(query);
  // if (allSales.length === 0) return { message: 'No momento você não possui compras' };

  return allSales;
};

const formatResponseContent = (dataToFormatted) => {
  const { products, ...saleRestProps } = dataToFormatted.toJSON();

  const newProducts = products.map((prod) => {
    const { salesProduct: { quantity }, ...prodRest } = prod;
    return { ...prodRest, quantity };
  });

  return { ...saleRestProps, products: newProducts };
};

const getById = async (id) => {
  const stringId = id.toString();
  const saleFound = await sale.findByPk(
    stringId,
    {
      attributes: ['id', 'saleDate', 'status', 'totalPrice'],
      include: [{
        model: product,
        as: 'products',
        attributes: {
          exclude: ['url_image'],
        },
        through: {
          attributes: ['quantity'],
        },
      },
      {
        model: user,
        as: 'seller',
        attributes: ['name'],
      }],
    },
  );

  const newSalePayload = formatResponseContent(saleFound);

  return newSalePayload;
};

const updateSaleStatus = async ({ id, status }) => sale.update({ status }, { where: { id } });

module.exports = {
  create,
  getAllSales,
  getById,
  updateSaleStatus,
};
