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

const findByRole = async (role) => {
  const person = await users.findAll({ where: { role } });
  return person;
};

const findAll = async () => users.findAll({ attributes: { exclude: ['password'] } });

const deleteUser = async (id) => users.destroy({ where: { id } });

module.exports = {
  register,
  findByEmail,
  findById,
  findByRole,
  findAll,
  deleteUser,
};
