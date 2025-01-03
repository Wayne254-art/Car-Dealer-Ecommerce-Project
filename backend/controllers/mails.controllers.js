

const db = require('../db/db')
exports.contactFormSubmissions = (req, res) => {
    const { fullName, emailAddress, phoneNumber, interestedIn } = req.body;
    const sql = 'INSERT INTO contact_submissions (fullName, emailAddress, phoneNumber, interestedIn) VALUES (?, ?, ?, ?)';
    db.query(sql, [fullName, emailAddress, phoneNumber, interestedIn], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving contact information');
        }
        res.send('Contact information saved successfully');
    });
}
