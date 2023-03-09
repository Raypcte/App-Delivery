const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(400).json({ message: 'token não encontrado' });
  
    const { data } = jwt.verify(token, secret);
    if (data.role !== 'administrator') res.status(401).json({ message: 'Não autorizado' });
    next();
  } catch (error) {
    next(error);
  }
};
