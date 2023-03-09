const express = require('express');
const userController = require('../controller/userController');
const validateAdmin = require('../middleware/validateAdminMiddleware');

const adminRouter = new express.Router();

adminRouter.post('/register', validateAdmin, userController.registerAdmin);

module.exports = adminRouter;
