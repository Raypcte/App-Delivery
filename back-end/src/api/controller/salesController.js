const salesService = require('../service/salesService');

async function create(req, res, next) {
  try {
    const data = req.body;
    const sale = {
      ...data,
      userId: req.id || data.userId,
      saleDate: new Date(),
      status: 'Pendente',
    };
  // console.log(sale, 'minha venda');
  const result = await salesService.create(sale);
  return res.status(201).json(result);
  } catch (error) {
    next(error)
  }
};

async function getByUserId(req, res, next) {
  try {
    const { id } = req.params;
    const orders = await salesService.getByUserId(id);
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

async function getOneByUserId(req, res, next) {
  try {
    const { userId, orderId } = req.params;
    const orders = await salesService.getOneByUserId(userId, orderId);
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

async function getAll(_req, res, next) {
  try {
    const orders = await salesService.getAll();
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

async function update(req, res, next) {
try {
  const { status, date, price } = req.body;
  const { id } = req.params;

  const result = await salesService.update(id, { status, date, price });

  return res.status(201).json(result);
} catch (error) {
  next(error);
}
};

async function deleteOrder(req, res, next) {
  try {
    const { id } = req.params;
    await salesService.deleteOrder(id);
    return res.status(200).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getByUserId,
  getAll,
  create,
  update,
  deleteOrder,
  getOneByUserId,
};
