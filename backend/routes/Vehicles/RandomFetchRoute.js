const express = require('express');
const db = require('../../db/db'); // Ensure this points to your DB connection module

const router = express.Router();

router.get('/car', (req, res) => {
    db.query(
        "SELECT vehicle_id FROM vehicles ORDER BY RAND() LIMIT 1",
        (error, results) => {
            if (error) {
                console.error('Error fetching random vehicle ID:', error);
                return res.status(500).send('Server error');
            }
            if (results.length === 0) {
                console.log('No vehicles found');
                return res.status(404).json({ message: 'Vehicle not found' });
            }

            const randomVehicleId = results[0].vehicle_id;

            db.query(
                "SELECT * FROM vehicles WHERE vehicle_id = ?",
                [randomVehicleId],
                (error, results) => {
                    if (error) {
                        console.error('Error fetching vehicle details:', error);
                        return res.status(500).send('Server error');
                    }
                    if (results.length === 0) {
                        console.log('Vehicle not found with ID:', randomVehicleId);
                        return res.status(404).json({ message: 'Vehicle not found' });
                    }
                    console.log('Fetched vehicle:', results[0]);
                    res.json(results[0]);
                }
            );
        }
    );
});

module.exports = router;
