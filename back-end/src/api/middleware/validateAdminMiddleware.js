const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(400).json({ message: 'token não encontrado' });

  const { data } = jwt.verify(authorization, secret)
  if (data.role !== 'administrator') res.status(401).json({ message: 'Não autorizado' })

  next();
}