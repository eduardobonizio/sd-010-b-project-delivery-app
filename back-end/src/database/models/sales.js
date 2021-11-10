module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, },
    status: DataTypes.STRING(50),
  }, { timestamps: false, tableName: 'sales' });
  Sales.associate = (models) => {
    models.sales.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    models.sales.belongsTo(models.users, { foreignKey: 'seller_id', as: 'seller' });
  }
  return Sales;
};