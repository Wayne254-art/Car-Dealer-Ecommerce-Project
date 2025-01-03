
const express = require('express');
const db = require('../../db/db'); // Ensure this points to your DB connection module

const router = express.Router();


//Router to fetch car details
router.get('/:listing_id', (req, res) => {
  const { listing_id } = req.params;

  const query = 'SELECT * FROM listings WHERE listing_id = ?';
  db.query(query, [listing_id], (err, results) => {
    if (err) {
      console.error('Error fetching vehicle data:', err);
      return res.status(500).send({ message: 'Database Error' });
    }

    if (results.length === 0) {
      return res.status(404).send({ message: 'Vehicle not found' });
    }

    res.status(200).send(results[0]);
  });
});


//Router to submit form
router.post('/submit', (req, res) => {
  const { vehicleId, fullName, email, phoneNumber, message } = req.body;

  const query = 'INSERT INTO vehicle_contact_messages (vehicle_id, full_name, email, phone_number, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [vehicleId, fullName, email, phoneNumber, message], (err, results) => {
    if (err) {
      console.error('Error inserting contact message:', err);
      return res.status(500).send({ message: 'Database Error' });
    }

    res.status(200).send({ message: 'Message submitted successfully' });
  });
});

module.exports = router;
