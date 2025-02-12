
// routes/authRoutes.js
const express = require('express');
const { signup, sellerSignup, login, forgotPassword,  resetPassword} = require('../controllers/auth.controllers');
const router = express.Router();

router.post('/user/register', signup);
router.post('/seller/register', sellerSignup);
router.post('/user/login', login);
router.post('/user/forgot-password', forgotPassword);
router.post('/user/reset-password/', resetPassword);

module.exports = router;
