

const express = require('express');
const db = require('../../db/db'); // Ensure this points to your DB connection module

const router = express.Router();

// Endpoint to get a list of all vehicles
router.get('/listing', (req, res) => {
  const query = 'SELECT * FROM listings';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching vehicle data:', err);
      return res.status(500).send({ message: 'Database Error' });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
