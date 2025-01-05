


// controllers/authController.js
const User = require('../models/customer.models');
const seller = require('../models/sellers.models')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

exports.signup = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
      const checkUser = await User.findOne({ where: { email } });
      if (checkUser)
        return res.json({
          success: false,
          message: "customer already exists!proceed to Login.",
        });

        const newUser = await User.create({ firstname, lastname, email, password });
        res.status(201).json({ message: 'customer registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering customer', error });
    }
};

exports.signup = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
      const checkUser = await seller.findOne({ where: { email } });
      if (checkUser)
        return res.json({
          success: false,
          message: "Seller already exists!proceed to Login.",
        });

        const newUser = await User.create({ firstname, lastname, email, password });
        res.status(201).json({ message: 'seller registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering seller', error });
    }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
      // Check if the user exists
      const user = await User.findOne({ where: { email } });
      if (!user) {
          return res.status(404).json({ message: 'User not found!' });
      }

      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create JWT token with user data
      const token = jwt.sign(
          { id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role, phonenumber: user.phonenumber }, // Include user data in the token payload
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
      );

      // Set cookie options
      const cookieOptions = {
          httpOnly: true,   // Ensures the cookie is sent only via HTTP(S), not accessible to JavaScript
          secure: process.env.NODE_ENV === 'production', // Only use HTTPS in production
          maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
          sameSite: 'Strict', // Helps mitigate CSRF attacks
      };

      // Send the token as a cookie
      res.cookie('token', token, cookieOptions);

      // Respond with success and minimal user data
      return res.status(200).json({ 
          message: 'Login successful', 
          user: { id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role, phonenumber: user.phonenumber } 
      });
  } catch (error) {
      console.error('Login error:', error); // Log the error for debugging purposes
      return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const resetToken = crypto.randomBytes(32).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000; // 1 hour
  
      user.resetToken = resetToken;
      user.resetTokenExpiry = resetTokenExpiry;
      await user.save();
  
      const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
  
      // Configure your email transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'eliteconnectionke@gmail.com',
          pass: 'atogxnprecfzihom',
        },
      });
  
      const mailOptions = {
        to: user.email,
        from: 'eliteconnectionke@gmail.com',
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link to reset your password: ${resetUrl}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error('Error in forgotPassword:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const user = await User.findOne({
        where: {
          resetToken: token,
          resetTokenExpiry: {
            [Op.gt]: Date.now(),
          },
        },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Token is invalid or has expired' });
      }
  
      user.password = newPassword; // hash the password before saving
      user.resetToken = null;
      user.resetTokenExpiry = null;
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Error in resetPassword:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


