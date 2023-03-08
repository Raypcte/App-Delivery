const express = require('express');
const salesController = require('../controller/salesController');

const salesRouter = new express.Router();

salesRouter.post('/', async (req, res, next) => salesController.create(req, res, next));

module.exports = salesRouter;
