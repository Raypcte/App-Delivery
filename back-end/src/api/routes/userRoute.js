const express = require('express');
const userController = require('../controller/userController');

const userRouter = new express.Router();

userRouter.post('/', (req, res, next) => userController.register(req, res, next))

module.exports = userRouter;
