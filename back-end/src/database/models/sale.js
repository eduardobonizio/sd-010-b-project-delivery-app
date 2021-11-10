module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {type: DataTypes.INTEGER, foreignKey: true},
    seller_id: {type: DataTypes.INTEGER, foreignKey: true},
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id', as: 'user'});
    sale.belongsTo(models.user, { foreignKey: 'seller_id', as: 'seller'});
    sale.hasMany(models.saleProduct, { foreignKey: 'product_id', as: 'product'});
  };
  return sale;
};
