const ordersModel = require('../model/ordersModel');
const BadRequestError = require('../error/badRequestError');
const NotFoundError = require('../error/notFoundError');
const ConflicError = require('../error/conflictError');

const getByUserId = async (id) => {
  const orders = await ordersModel.getByUserId(Number(id));
  if (!orders) throw new NotFoundError('usuário sem pedidos cadastrados');
  return orders;
};

const getOneByUserId = async (userId, orderId) => {
  const [order] = await ordersModel.getOneByUserId(Number(userId), Number(orderId));
  if (!order) throw new NotFoundError('usuário sem pedidos cadastrados');
  return order;
};

const create = async (data) => {
  if (!data.status || !data.date || !data.price) throw new BadRequestError('dados inválidos');
  const result = await ordersModel.create(data);
  return result;
};

const findAll = async () => ordersModel.findAll();

const update = async (id, data) => {
  const result = await ordersModel.update(id, data);
  if (result > 1) throw new ConflicError('mais de um pedido atualizado');
  if (result === 0) throw new BadRequestError('nenhum pedido foi atualizado');
  return result;
};

const deleteOrder = async (id) => {
  const result = await ordersModel.deleteOrder(id);
  if (!result) throw new BadRequestError('id inválido');

  return result;
};

module.exports = {
  create,
  findAll,
  update,
  getByUserId,
  deleteOrder,
  getOneByUserId,
};
