const express = require('express');
const ordersController = require('../controller/ordersController');

const orderRouter = new express.Router();

orderRouter.post('/', async (req, res, next) => ordersController.create(req, res, next));
orderRouter.put('/:id', async (req, res, next) => ordersController.update(req, res, next));
orderRouter.delete('/:id', async (req, res, next) => ordersController.deleteOrder(req, res, next));

orderRouter.get('/:id', async (req, res, next) => ordersController.getByUserId(req, res, next));
orderRouter.get('/', async (req, res, next) => ordersController.getAll(req, res, next))

module.exports = orderRouter;
