const dados = (DataTypes) => (
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
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
    sale.belongsTo(models.user,
      { foreignKey: 'user_id', as: 'users'},
    );  
    sale.belongsTo(models.sales, 
        { foreignKey: 'seller_id', as: 'sellers'},
      );
  };

  return sale;
};

module.exports = sale;
