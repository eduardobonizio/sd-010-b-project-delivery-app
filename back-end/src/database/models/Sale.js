module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    total_price: DataTypes.STRING(100),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE, 
    status: DataTypes.STRING(50)
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,{foreignKey: 'user_id', as: 'users'});
    Sale.belongsTo(models.User,{foreignKey: 'saller_id', as: 'saller'});
  }
  return Sale;
}