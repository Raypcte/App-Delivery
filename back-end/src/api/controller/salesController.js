const salesService = require('../service/salesService');

async function create(req, res, _next) {
  const data = req.body;
  const sale = {
    ...data,
    userId: req.id || data.userId,
    saleDate: new Date(),
    status: 'Pendente',
  };
  console.log(sale, 'minha venda');
  const result = await salesService.create(sale);
  return res.status(201).json(result);
}

module.exports = {
  create,
};