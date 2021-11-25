const { sale, product } = require("../models");

const getSales = async () => sale.findAll();
const getSaleById = async (id) =>
  sale.findByPk(id, {
    include: [{ model: product, as: "products", through: { attributes: ["quantity"] } }], // 1
  });

module.exports = {
  getSales,
  getSaleById,
};

// 1: https://www.bezkoder.com/sequelize-associate-many-to-many/
