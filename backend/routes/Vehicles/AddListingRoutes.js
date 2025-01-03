const express = require("express");
const router = express.Router();
const db = require("../../db/db");
const upload = require("../../Middlewares/multer.middleware");
const multer = require("multer");

// Middleware to handle multer errors
function multerErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err);
    return res.status(400).json({ message: err.message });
  } else if (err) {
    console.error("Unknown error:", err);
    return res.status(500).json({ message: "Unknown error occurred during file upload", err });
  }
  next();
}

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// POST endpoint to add a listing
router.post("/submission", upload, multerErrorHandler, (req, res) => {
  const {
    listingTitle,
    listingCondition,
    listingType,
    listingMake,
    listingModel,
    listingPrice,
    modelYear,
    driveType,
    transmission,
    fuelType,
    engineCapacity,
    engineSize,
    listingCylinders,
    horsePower,
    listingMileage,
    exteriorColor,
    interiorColor,
    numberOfDoors,
    listingVin,
    listingStatus,
    firstName,
    lastName,
    contact,
    emailAddress,
    county,
    residence,
  } = req.body;

  // Generate URLs for listingImages
  const baseURL = "http://localhost:7071/uploads/";
  const listingImages = req.files['listingImages'] ? req.files['listingImages'].map(file => baseURL + file.filename) : [];

  // Generate URLs for listingAttachments
  const listingAttachments = req.files['listingAttachments'] ? req.files['listingAttachments'].map(file => baseURL + file.filename) : [];

  const query = `INSERT INTO listings (
    listingTitle, listingCondition, listingType, listingMake, listingModel, listingPrice,
    modelYear, driveType, transmission, fuelType, engineCapacity, engineSize, listingCylinders,
    horsePower, listingMileage, exteriorColor, interiorColor, numberOfDoors, listingVin,
    listingStatus, listingImages, listingAttachments, firstName, lastName, contact,
    emailAddress, county, residence
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  db.query(
    query,
    [
      listingTitle,
      listingCondition,
      listingType,
      listingMake,
      listingModel,
      listingPrice,
      modelYear,
      driveType,
      transmission,
      fuelType,
      engineCapacity,
      engineSize,
      listingCylinders,
      horsePower,
      listingMileage,
      exteriorColor,
      interiorColor,
      numberOfDoors,
      listingVin,
      listingStatus,
      JSON.stringify(listingImages),
      JSON.stringify(listingAttachments),
      firstName,
      lastName,
      contact,
      emailAddress,
      county,
      residence,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ message: "Error inserting data", error });
      } else {
        res.status(201).json({
          message: "Listing Added Successfully!",
          id: results.insertId,
        });
      }
    }
  );
});

module.exports = router;
