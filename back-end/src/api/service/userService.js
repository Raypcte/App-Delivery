const md5 = require('md5');
const BadRequestError = require('../error/badRequestError');
const NotFoundError = require('../error/notFoundError');
const UnauthorizedError = require('../error/unauthorizedError');
const ConflictError = require('../error/conflictError');
const { jwtAuthenticate } = require('../auth/jwt');
const userModel = require('../model/userModel');

const validateCredentials = (user) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(user.email)) throw new BadRequestError('email inválido');

  if (user.password.length < 6) throw new BadRequestError('senha inválida');
};

const generateToken = (user) => jwtAuthenticate({
    id: user.id,
    email: user.email,
    role: user.role,
  });

const findById = async (id) => {
  const user = await userModel.findById(id);
  return user;
};

const findByEmail = async (email) => {
  const user = await userModel.findByEmail(email);
  return user;
};

const register = async (user) => {
  validateCredentials(user);
  if (user.name.length < 12) throw new BadRequestError('nome inválido');

  try {
    await userModel.register({ ...user, password: md5(user.password) });
  } catch (error) {
    throw new ConflictError('Nome ou email indisponíveis');
  }

  const newUser = await findByEmail(user.email);

  if (!newUser) throw new NotFoundError('usuário não encontrado');

  return generateToken(newUser);
};

const login = async (credentials) => {
  validateCredentials(credentials);

  const user = await findByEmail(credentials.email);

  if (!user) throw new NotFoundError('usuário não encontrado');

  if (user.password !== md5(credentials.password)) throw new UnauthorizedError('senha inválida'); 

  const { name, email, role } = user;

  return { token: generateToken(user), name, email, role };
};

module.exports = {
  findByEmail,
  findById,
  register,
  login,
};
