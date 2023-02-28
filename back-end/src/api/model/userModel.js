const { user } = require('../../database/models');

const register = async (data) => {
  const newUser = await user.create(data);
  return newUser;
};

const findById = async (id) => {
  const person = await user.findByPk(Number(id));
  return person;
};

const findByEmail = async (email) => {
  const person = await user.findOne({ where: { email } });
  return person;
};

module.exports = {
  register,
  findByEmail,
  findById,
};
