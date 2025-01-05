
// models/customer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const bcrypt = require('bcryptjs');

const Customer = sequelize.define('customer', {
    customerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'customer',
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '0799703637',
        unique: true,
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resetTokenExpiry: {
        type: DataTypes.DATE,
        allowNull: true,
      },
}, {
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
    },
});

module.exports = Customer;
