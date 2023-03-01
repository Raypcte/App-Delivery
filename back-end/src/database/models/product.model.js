const { Model, INTEGER, STRING, DECIMAL } = require('sequelize');
const db = require('.');

class Product extends Model { }

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING(100),
  },
  price: {
    allowNull: false,
    type: DECIMAL(4, 2)
  },
  urlImage: { type: STRING }
}, {
  sequelize: db,
  modelName: 'product',
  tableName: 'products',
  timestamps: false,
  underscored: true,
});

module.exports = Product;
