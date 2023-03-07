const salesModel = require('../model/salesModel');

const create = async (data) => {
  const result = await salesModel.create(data);
  return result;
};

module.exports = {
  create,
};
