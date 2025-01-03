

// backend/db/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Wayne',
  password: '', 
  database: 'elite_motors'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database Connection is established');
});

module.exports = db;
