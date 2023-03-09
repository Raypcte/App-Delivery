const { jwtDecript } = require('../auth/jwt');
const { findById } = require('../service/userService');

async function validateToken(req, res, next) {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(400).json({ error: 'Token não encontrado' });
    }

    const userData = jwtDecript(token);

    const user = await findById(userData.id);

    if (!user) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = validateToken;
