const express = require('express');
const salesController = require('../controller/salesController');

const salesRouter = new express.Router();

salesRouter.post('/', async (req, res, next) => salesController.create(req, res, next));
orderRouter.put('/:id', async (req, res, next) => ordersController.update(req, res, next));
orderRouter.delete('/:id', async (req, res, next) => ordersController.deleteOrder(req, res, next));

orderRouter.get(
  '/:userId/:orderId',
  async (req, res, next) => ordersController.getOneByUserId(req, res, next),
);
orderRouter.get('/:id', async (req, res, next) => ordersController.getByUserId(req, res, next));
orderRouter.get('/', async (req, res, next) => ordersController.getAll(req, res, next));

module.exports = salesRouter;
