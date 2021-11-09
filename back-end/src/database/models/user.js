module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blog_posts' });
  // };
  return User;
};
