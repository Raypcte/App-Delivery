const { sales } = require('../../database/models');

const create = async (data) => sales.create(data);

module.exports = {
  create,
};
