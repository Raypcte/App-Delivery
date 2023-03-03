const { products } = require('../../database/models');

const create = async (data) => products.create(data);

const findAll = async () => products.findAll();

const findById = async (id) => products.findByPk(id);

const update = async (id, data) => {
  const { name, price, urlImage } = data;
  return products.update({ name, price, urlImage }, { where: { id } });
};

const deleteProduct = async (id) => products.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteProduct,
};
