
// controllers/listingsController.js
const Listings = require('../models/listings.models');
const Sellers = require('../models/sellers.models');

// Create a new listing
exports.AddListing = async (req, res) => {
  const {
    listingTitle,
    condition,
    status,
    type,
    make,
    model,
    price,
    year,
    driveType,
    transmission,
    fuelType,
    engineCapacity,
    engineSize,
    cylinders,
    horsePower,
    mileage,
    exteriorColor,
    interiorColor,
    doors,
    vin,
    sellers,
    sellerId, // Pass the sellerId to associate with the listing
  } = req.body;

  try {
    // Check if seller exists
    const seller = await Sellers.findByPk(sellerId);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Create the listing and associate it with the seller
    const newListing = await Listings.create({
      listingTitle,
      condition,
      status,
      type,
      make,
      model,
      price,
      year,
      driveType,
      transmission,
      fuelType,
      engineCapacity,
      engineSize,
      cylinders,
      horsePower,
      mileage,
      exteriorColor,
      interiorColor,
      doors,
      vin,
      sellers,
      sellerId,
    });

    res.status(201).json({ message: 'Listing created successfully', listing: newListing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create listing', error: error.message });
  }
};
