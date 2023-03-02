const { users } = require('../../database/models');

const register = async (data) => {
  const newUser = await users.create(data);
  return newUser;
};

const findById = async (id) => {
  const person = await users.findByPk(Number(id));
  return person;
};

const findByEmail = async (email) => {
  const person = await users.findOne({ where: { email } });
  return person;
};

module.exports = {
  register,
  findByEmail,
  findById,
};
