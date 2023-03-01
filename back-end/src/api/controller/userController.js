const userService = require('../service/userService');

async function register(req, res, next) {
  try {
    const { name, email, password, role } = req.body;

    const token = await userService.register({ name, email, password, role });

    return res.status(201).json({ name, email, password, role, token });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};
