

const express = require('express');
const db = require('../../db/db'); // Adjust the path as needed

const router = express.Router();

// Get vehicle counts
router.get('/counts', async (req, res) => {
  const allCountQuery = 'SELECT COUNT(*) AS count FROM listings';
  const newCountQuery = 'SELECT COUNT(*) AS count FROM listings WHERE listingCondition = "New"';
  const usedCountQuery = 'SELECT COUNT(*) AS count FROM listings WHERE listingCondition = "Used"';

  try {
      const allCount = await new Promise((resolve, reject) => {
          db.query(allCountQuery, (err, results) => {
              if (err) return reject(err);
              resolve(results[0].count);
          });
      });

      const newCount = await new Promise((resolve, reject) => {
          db.query(newCountQuery, (err, results) => {
              if (err) return reject(err);
              resolve(results[0].count);
          });
      });

      const usedCount = await new Promise((resolve, reject) => {
          db.query(usedCountQuery, (err, results) => {
              if (err) return reject(err);
              resolve(results[0].count);
          });
      });

      res.json({ all: allCount, new: newCount, used: usedCount });
  } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching vehicle counts' });
  }
});

// Route to fetch the total number of vehicles by make
router.get('/count', (req, res) => {
    const query = 'SELECT listingMake, COUNT(*) as total FROM listings GROUP BY listingMake';
    
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch data' });
        return;
      }
      
      res.json(results);
    });
  });

module.exports = router;
