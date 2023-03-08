const express = require('express');
const salesController = require('../controller/salesController');

const salesRouter = new express.Router();

salesRouter.post('/', async (req, res, next) => salesController.create(req, res, next));
salesRouter.put('/:id', async (req, res, next) => salesController.update(req, res, next));
salesRouter.delete('/:id', async (req, res, next) => salesController.deleteOrder(req, res, next));
salesRouter.get('/', async (req, res, next) => salesController.getAll(req, res, next));
salesRouter.get('/:id', async (req, res, next) => salesController.getByUserId(req, res, next));
salesRouter.get(
  '/:userId/:orderId',
  async (req, res, next) => salesController.getOneByUserId(req, res, next),
);

module.exports = salesRouter;
