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
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    urlImage: {
      field: 'url_image',
      type: DataTypes.STRING,
    }
  }, {
    modelName: 'products',
    timestamps: false,
  });

  return product;
}
