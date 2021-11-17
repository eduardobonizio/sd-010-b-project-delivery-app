module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'sales',
  });
  sale.associate = (models) => {
    sale.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' }
    );
  };
  return sale;
};