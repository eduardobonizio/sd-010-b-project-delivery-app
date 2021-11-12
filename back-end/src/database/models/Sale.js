module.exports = (sequelize, DataTypes) => sequelize.define('Sale', {
  user_id: { type: DataTypes.INTEGER, foreignKey: true },
  seller_id: { type: DataTypes.INTEGER, foreignKey: true },
  total_price: DataTypes.DECIMAL(9,2),
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  sale_date: DataTypes.DATE,
  status: DataTypes.STRING,
},
{
  timestamps: false,
  tableName: 'sales',
}); 