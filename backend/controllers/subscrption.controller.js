const db = require('../db/db');
exports.addSubscription = (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).send({ message: 'Email is required' });
    }
  
    const checkQuery = 'SELECT * FROM subscriptions WHERE email_address = ?';
    db.query(checkQuery, [email], (err, results) => {
      if (err) {
        console.error('Error checking email:', err);
        return res.status(500).send({ message: 'Database Error' });
      }
  
      if (results.length > 0) {
        return res.status(400).send({ message: 'Email already subscribed' });
      }
  
      const insertQuery = 'INSERT INTO subscriptions (email_address) VALUES (?)';
      db.query(insertQuery, [email], (err, result) => {
        if (err) {
          console.error('Error inserting email:', err);
          return res.status(500).send({ message: 'Database Error' });
        }
        res.status(200).send({ message: 'Subscription successful' });
      });
    });
  }

