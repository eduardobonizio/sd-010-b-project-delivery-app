"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        field: "seller_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: "total_price",
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_address",
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: "delivery_number",
      },
      SaleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "sale_date",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
