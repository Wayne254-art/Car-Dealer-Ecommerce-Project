
// routes/carListingRoutes.js
const express = require('express');
const router = express.Router();
const { AddListing } = require('../controllers/dashboard/listings.contollers');

router.post('/add-listing', AddListing);

module.exports = router;
