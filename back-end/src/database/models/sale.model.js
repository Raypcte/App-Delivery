const { Model, INTEGER, STRING, DECIMAL, DATE } = require('sequelize');
const db = require('.');
const User = require('./user.model');

class Sale extends Model { }

Sale.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },
  sellerId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },
  totalPrice: {
    type: DECIMAL(9, 2),
    allowNull: false,
  },
  deliveryAddres: {
    type: STRING,
    allowNull: false,
  },
  deliveryNumber: {
    type: STRING(50),
    allowNull: false,
  },
  saleDate: {
    type: DATE,
    allowNull: false,
  },
  status: {
    type: STRING(50),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'sale',
  tableName: 'sales',
  underscored: true,
  timestamps: false,
});

Sale.hasMany(User, { foreignKey: 'userId', as: 'custumer' });
Sale.hasMany(User, { foreignKey: 'sellerId', as: 'seller' });

User.belongsTo(Sale, { foreignKey: 'userId', as: 'custumer' });
User.belongsTo(Sale, { foreignKey: 'sellerId', as: 'seller' });

module.exports = Sale;
