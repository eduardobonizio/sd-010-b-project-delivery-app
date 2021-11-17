const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    userId: { type: DataTypes.INTEGER, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER, field: 'seller_id' },
    totalPrice: { type: DataTypes.DECIMAL(9,2), field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING(100), field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING(50), field: 'delivery_number' },
    saleDate: { type: DataTypes.DATE, field: 'sale_date' },
    status: DataTypes.STRING(50),
  }, {
    timestamps: false,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'sales' });
    // Sale.belongsTo(models.Product, { through: 'SalesProducts' }); se der ruim descomenta
  };
  
  return Sale; 
};

module.exports = Sale;