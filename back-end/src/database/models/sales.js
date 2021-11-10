module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sale', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'sales',
  });
  return sales;
};