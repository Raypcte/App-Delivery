'use strict';

module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    modelName: 'sale',
    tableName: 'sales',
    underscored: true,
    timestamps: false,
  });

  sales.associate = ({ users }) => {
    sales.belongsTo(users, { foreignKey: 'userId', as: 'custumer' });
    sales.belongsTo(users, { foreignKey: 'sellerId', as: 'seller' });

    users.hasMany(sales, { foreignKey: 'userId', as: 'custumer' });
    users.hasMany(sales, { foreignKey: 'sellerId', as: 'seller' });
  }

  return sales;
};
