const express = require('express');
const productController = require('../controller/productController');

const productRouter = new express.Router();

productRouter.post('/', async (req, res, next) => productController.create(req, res, next));

productRouter.get('/', async (req, res, next) => productController.findAll(req, res, next));
productRouter.get('/:id', async (req, res, next) => productController.findById(req, res, next));

// productRouter.put('/:id', async (req, res, next) => productController.update(req, res, next));

productRouter.delete('/:id', async (req, res, next) => productController.deleteProduct(req, res, next));

module.exports = productRouter;
