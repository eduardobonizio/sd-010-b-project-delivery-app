module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'Sales',
  });
  return Sales;
};