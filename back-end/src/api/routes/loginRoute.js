const express = require('express');
const userController = require('../controller/userController');

const loginRouter = new express.Router();

loginRouter.post('/', async (req, res, next) => userController.login(req, res, next));

module.exports = loginRouter;
