const userService = require('../service/userService');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const token = await userService.register({ name, email, password });

    return res.status(201).json({ name, email, token, role: 'customer' });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const info = await userService.login({ email, password });

    return res.status(200).json({ ...info });
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.findById(id);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
}

module.exports = {
  register,
  login,
  getById,
};
