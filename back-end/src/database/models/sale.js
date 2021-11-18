const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(10,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber : DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,

  }, 
  {
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.hasMany(models.product, { foreignKey: 'product_id', as: 'products' });
  };

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
  };

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller' });
  };

  return sale;
};

module.exports = Sale;