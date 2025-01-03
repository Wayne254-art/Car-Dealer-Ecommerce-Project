

const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../../db/db'); // Ensure this points to your DB connection module

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Set the filename to be unique
    }
});

const upload = multer({ storage: storage });

// Create the 'uploads' folder if it doesn't exist
const fs = require('fs');
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}


//Add New Team Member
router.post('/register', upload.single('image'), (req, res) => {
    const { firstName, lastName, role, email, contact } = req.body;
    const image = req.file ? req.file.filename : null; // Get the uploaded file's filename

    const sql = 'INSERT INTO team_members (firstName, lastName, role, email, contact, images) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, role, email, contact, image], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error creating user');
        }
        res.send('User created successfully');
    });
});

//Display New Team Members
router.get('/list', (req, res) => {
    const sql = 'SELECT * FROM team_members';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
