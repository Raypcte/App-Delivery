// const { sequelize } = require('../../database/models/index');
const { sales, products, users, salesProducts } = require('../../database/models');

const create = async (data) => {
  try {
    // const result = await sequelize.transaction(async (t) => {
      const sale = await sales.create(data);
      await data.products.map(async (p) => salesProducts.create({ 
          saleId: sale.id,
          productId: p.productId,
          quantity: p.quantity,
        }));
      return sale;
    // });
    // return result;
  } catch (error) {
    console.log(error);
  }
};

const findAll = async () => sales.findAll();

const findById = async (id) => sales.findByPk(id);

const getByUserId = async (id) => sales.findAll({ 
  where: { userId: id },
  include: { model: products, as: 'products', through: { attributes: [] } },
});

const getOneByUserId = async (userId, orderId) => sales.findOne({ 
  where: { userId, id: orderId },
  include: [
    { model: products, as: 'products', through: { attributes: [] } },
    { model: users, as: 'seller' },
  ],
});

const update = async (id, data) => {
  const { status, date, price } = data;
  return sales.update({ status, date, price }, { where: { id } });
};

const deleteOrder = async (id) => sales.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  getByUserId,
  update,
  deleteOrder,
  getOneByUserId,
};
