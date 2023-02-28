const md5 = require('md5');
const BadRequestError = require('../error/badRequestError');
const NotFoundError = require('../error/notFoundError');
const UnauthorizedError = require('../error/unauthorizedError');
const { jwtAuthenticate } = require('../auth/jwt');
const userModel = require('../model/userModel');

const validateCredentials = (user) => {
  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

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

  await userModel.register({ ...user, password: md5(user.password) });

  const newUser = await findByEmail(user.email);

  if (!newUser) throw new NotFoundError('usuário não encontrado');

  return generateToken(user);
};

const login = async (credentials) => {
  validateCredentials(credentials);

  const user = await findByEmail(credentials.email);

  if (!user) throw new NotFoundError('usuário não encontrado');
  if (user.password !== md5(credentials.password)) throw new UnauthorizedError('senha inválida'); 

  return generateToken(user);
};

module.exports = {
  findByEmail,
  findById,
  register,
  login,
};
