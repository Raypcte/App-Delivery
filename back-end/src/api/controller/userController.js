const userService = require('../service/userService');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const { id, token } = await userService.register({ name, email, password });

    return res.status(201).json({ id, name, email, token, role: 'customer' });
  } catch (error) {
    next(error);
  }
}

async function registerAdmin(req, res, next) {
  try {
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role);
    await userService.register({ name, email, password, role });

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const info = await userService.login({ email, password });
    req.id = info.id;

    return res.status(200).json({ ...info });
  } catch (error) {
    next(error);
  }
}

async function getRole(req, res, next) {
  try {
    const { role } = req.query;
    console.log(role);
    const info = await userService.findByRole(role);
    return res.status(200).json(info);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  getRole,
  registerAdmin,
};
