const dados = (DataTypes) => (
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: { type: DataTypes.DATE, defaultValue: Date.now() },
    status: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
  }
)

const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", dados(DataTypes),{
    timestamps: false,
  });

  sale.associate = (models) => {
    models.sale.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'users'},
    );  
    models.sale.belongsTo(models.user, 
        { foreignKey: 'seller_id', as: 'sellers'},
      );
  };

  return sale;
};

module.exports = sale;
