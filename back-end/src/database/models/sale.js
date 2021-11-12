'use strict';

const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  { timestamps: false });

  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user'});
  }
  return sale;
};

module.exports = Sale;
