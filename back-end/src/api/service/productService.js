const productModel = require('../model/productModel');
const BadRequestError = require('../error/badRequestError');

const create = async (data) => {
  const result = await productModel.create(data);
  return result;
}

const findAll = async () => await productModel.findAll();

const findById = async (id) => {
  const result = await productModel.findById(id);
  if (!result) throw new BadRequestError('id inválido');

  return result;
}

const update = async (id, data) => {
  const result = await productModel.update(id, data);
  return result
}

const deleteProduct = async (id) => {
  const result = await productModel.deleteProduct(id);
  if (!result) throw new BadRequestError('id inválido');

  return result
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteProduct,
}