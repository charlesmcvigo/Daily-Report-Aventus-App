const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/users', userController.getAllUsers);
router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);

module.exports = router;