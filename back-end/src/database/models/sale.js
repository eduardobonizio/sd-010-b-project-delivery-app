const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber : DataTypes.STRING,
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING,

  }, 
  {
    timestamps: false,
    createdAt: 'saleDate',
    underscored: true,
  });

  sale.associate = (models) => {
    sale.hasMany(models.Product, { foreignKey: 'product_id', as: 'products' });
  };

  sale.associate = (models) => {
    sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  };

  sale.associate = (models) => {
    sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'users' });
  };

  return sale;
};

module.exports = Sale;