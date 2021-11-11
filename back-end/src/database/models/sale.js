module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    total_price: DataTypes.DECIMAL(9,2),
    delivery_adress: DataTypes.STRING,
    delivery_number: DataTypes.INTEGER,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users'});
  };

  return Sale;
};
