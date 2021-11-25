module.exports = (sequelize, DataTypes) =>{
  const SalesProduct = sequelize.define('SalesProduct',{
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProduct.associate = (models) =>{
    models.Product.belongsToMany(models.Sale, {
      as: 'sale', 
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    
    models.Sale.belongsToMany(models.Product, {
      as: 'productsSold',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id', 
    });
  }
  
  return SalesProduct;
  }