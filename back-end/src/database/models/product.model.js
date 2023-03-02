'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4, 2)
    },
    urlImage: { type: DataTypes.STRING }
  }, {
    modelName: 'product',
    tableName: 'products',
    timestamps: false,
    underscored: true,
  })

  return product
}
