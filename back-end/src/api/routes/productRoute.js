const express = require('express');
const productsController = require('../controller/productController');

const productRouter = new express.Router();

productRouter.get('/', async (req, res, next) => productsController.findAll(req, res, next));
productRouter.get('/:id', async (req, res, next) => productsController.findById(req, res, next));

module.exports = productRouter;
