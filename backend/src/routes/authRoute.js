const express = require('express');
const router = express.Router();
const { registerUser, registerUserValidation } = require('../controllers/auth/userRegister');
const { loginUser, loginUserValidation } = require('../controllers/auth/userLogin');


router.post('/register', registerUserValidation, registerUser);
router.post('/login', loginUserValidation, loginUser);


module.exports = router;