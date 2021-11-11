module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, },
    status: DataTypes.STRING,
    
  }, { timestamps: false, tableName: 'sales' });

  Sale.associate = (models) => {
    models.Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    models.Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
  }
  return Sale;
};