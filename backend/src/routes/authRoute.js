const express = require('express');
const Router = express.Router();

const { userRegister, registerUserValidation } = require('../controllers/auth/userRegister');
const { loginUser, loginUserValidation } = require('../controllers/auth/userLogin');


Router.post('/register', registerUserValidation, registerUser);
Router.post('/login', loginUserValidation, loginUser);


module.exports = Router;