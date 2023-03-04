const { sales } = require('../../database/models');

const create = async (data) => sales.create(data);

const findAll = async () => sales.findAll();

const findById = async (id) => sales.findByPk(id);

const getByUserId = async (id) => sales.findAll({ where: { userId: id }});

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
};
