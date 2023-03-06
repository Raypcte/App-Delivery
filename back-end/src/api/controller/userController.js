const userService = require('../service/userService');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const data = await userService.register({ name, email, password });

    return res.status(201).json({ ...data });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const data = await userService.login({ email, password });

    return res.status(200).json({ ...data });
  } catch (error) {
    next(error);
  }
}

async function findById(req, res, next) {
    try {
      const { id } = req.params;
      const { id: userId, name, email, role } = await userService.findById(id);

      return res.status(200).json({ userId, name, email, role });
    } catch (error) {
      next(error);
    }
}

module.exports = {
  register,
  login,
  findById,
};
