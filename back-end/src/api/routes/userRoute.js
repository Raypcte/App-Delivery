const express = require('express');
const userController = require('../controller/userController');

const userRouter = new express.Router();

userRouter.post('/', async (req, res, next) => userController.register(req, res, next));

userRouter.get('/:id', async (req, res, next) => userController.findById(req, res, next));

module.exports = userRouter;
