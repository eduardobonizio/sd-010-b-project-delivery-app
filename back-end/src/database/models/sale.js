module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {type: DataTypes.INTEGER, foreignKey: true},
    seller_id: {type: DataTypes.INTEGER, foreignKey: true},
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'user'});
    Sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller'});
    Sale.hasMany(models.SaleProduct, { foreignKey: 'product_id', as: 'product'});
  };
  return Sale;
};
