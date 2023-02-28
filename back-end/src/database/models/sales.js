'use strict';
module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'User',
        key: 'id',
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seller_id',
      references: {
        model: 'User',
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'total_price',
    },
    deliveryAdress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_adress',
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    modelName: 'sales',
    timestamps: false,
  });

  sale.associate = (models) => {
    sale.hasMany(models.user, { foreignKey: 'userId', as: 'user' });
    sale.hasMany(models.user, { foreignKey: 'sellerId', as: 'seller' });

    models.user.belongsTo(sale, {foreignKey: 'userId', as: 'user' });
    models.user.belongsTo(sale, { foreignKey: 'sellerId', as: 'seller' });
  }

  return sale;
}
