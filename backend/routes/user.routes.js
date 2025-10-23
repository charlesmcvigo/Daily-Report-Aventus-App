const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
const {requireAuth} = require('../middlewares/auth.middleware.js');

router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);
router.post('/logout', userController.Logout);

router.get('/users', requireAuth,userController.getAllUsers);
module.exports = router;