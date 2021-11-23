module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    user_id: {
      field: 'user_id',
      type:  DataTypes.INTEGER
    },
    seller_id: {
      type: DataTypes.INTEGER,
      field: 'sellerId'
    },
    total_price: {
      type: DataTypes.DECIMAL(9, 2),
      field: 'totalPrice'
    },
    delivery_address: {
      type: DataTypes.STRING(100),
      field: 'deliveryAddress'
    },
    delivery_number: {
      type: DataTypes.STRING(50),
      field: 'deliveryNumber'
    },
    sale_date: { field: 'saleDate', type: DataTypes.DATE, defaultValue: DataTypes.NOW, },
    status: DataTypes.STRING(50),
  }, { underscored: true, timestamps: false, tableName: 'sales' });
  Sales.associate = (models) => {
    models.sales.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    models.sales.belongsTo(models.users, { foreignKey: 'seller_id', as: 'seller' });
  }
  return Sales;
};