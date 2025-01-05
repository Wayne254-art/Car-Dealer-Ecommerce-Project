
// models/Listings.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Sellers = require('./sellers.models');

const Listings = sequelize.define('listings', {
  listingId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  listingTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  driveType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fuelType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  engineCapacity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  engineSize: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cylinders: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  horsePower: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mileage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  exteriorColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interiorColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doors: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sellers: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Sellers,
      key: 'sellerId',
    },
  },
}, {
  timestamps: true,
});

Sellers.hasMany(Listings, { foreignKey: 'sellerId' });
Listings.belongsTo(Sellers, { foreignKey: 'sellerId' });

module.exports = Listings;
