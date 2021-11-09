module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });
  };

  SalesProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };

  return SalesProduct;
};

// // models/UserBook.js
// module.exports = (sequelize, _DataTypes) => {
// const UserBook = sequelize.define('UserBook',
// {},
// { timestamps: false },
// );

// UserBook.associate = (models) => {
// models.Book.belongsToMany(models.User, {
// as: 'users',
// through: UserBook,
// foreignKey: 'book_id',
// otherKey: 'user_id',
// });
// models.User.belongsToMany(models.Book, {
// as: 'books',
// through: UserBook,
// foreignKey: 'user_id',
// otherKey: 'book_id',
// });
// };

// return UserBook;
// };
