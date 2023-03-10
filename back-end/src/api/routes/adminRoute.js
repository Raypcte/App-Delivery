const express = require('express');
const userController = require('../controller/userController');
const validateAdmin = require('../middleware/validateAdminMiddleware');

const adminRouter = new express.Router();

adminRouter.post('/register', validateAdmin, userController.registerAdmin);
adminRouter.get('/user', validateAdmin, userController.findAll);
adminRouter.delete('/user/:id', validateAdmin, userController.deleteUser);

module.exports = adminRouter;
