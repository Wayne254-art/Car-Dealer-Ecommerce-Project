
// routes/authRoutes.js
const express = require('express');
const { signup, login, forgotPassword,  resetPassword} = require('../controllers/auth.controllers');
const router = express.Router();

router.post('/user/signup', signup);
router.post('/user/login', login);
router.post('/user/forgot-password', forgotPassword);
router.post('/user/reset-password/', resetPassword);

module.exports = router;
