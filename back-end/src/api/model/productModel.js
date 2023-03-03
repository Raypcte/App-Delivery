const { products } = require('../../database/models');

const create = async (data) => await products.create(data);

const findAll = async () => await products.findAll();

const findById = async (id) => await products.findByPk(id);

const update = async (id, data) => {
  const { name, price, urlImage } = data
  return await products.update({ name, price, urlImage }, { where: { id } });
}

const deleteProduct = async (id) => await products.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteProduct,
}