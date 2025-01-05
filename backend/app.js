
// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const sequelize = require('./db/db')

const UserRoutes = require('./routes/auth.routes')
const listingRoutes = require('./routes/listings.routes')

const fs = require('fs');
const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',                
  allowedHeaders: ['Content-Type', 'Authorization'],         
  credentials: true                                          
};

app.use(cors(corsOptions));
// app.use(bodyParser.json());

// Set up body-parser middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

app.use('/uploads', express.static('uploads'));

app.use('/api/auth', UserRoutes)
app.use('/api/listings', listingRoutes)


sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
  });


const PORT = process.env.PORT || 7071;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
