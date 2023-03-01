const { Model, INTEGER } = require('sequelize');
const db = require('.');
const Product = require('./product.model');
const Sale = require('./sale.model');

class SaleProduct extends Model { }

SaleProduct.init({
  saleId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: Sale,
      key: 'id',
    }
  },
  productId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
  quantity: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'saleProduct',
  tableName: 'salesProducts',
  underscored: true,
  timestamps: false,
});

SaleProduct.hasMany(Sale, { foreignKey: 'saleId', as: 'sale' });
SaleProduct.hasMany(Product, { foreignKey: 'productId', as: 'product' });

Sale.belongsTo(SaleProduct, { foreignKey: 'saleId', as: 'sale' });
Product.belongsTo(SaleProduct, { foreignKey: 'productId', as: 'product' });

module.exports = SaleProduct;
