

// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const sequelize = require('./db/db')
const subscriptionRoutes = require('./routes/MailFormRoutes/SubscriptionRoutes');
const vehiclesDetailRouter = require('./routes/Vehicles/ListingDetailRoutes');
const vehiclesDetailContactRouter = require('./routes/Vehicles/ListingDetailRoutes');
const AddlistingRoutes = require('./routes/Vehicles/AddListingRoutes');
const StockListingRoutes = require('./routes/Vehicles/StockListingRoutes');
const ListingFilterCondition = require('./routes/Vehicles/ListingFilterCondition');
const FilterByMake = require('./routes/Vehicles/ListingFilterCondition')
const RandomExpensiveCar = require('./routes/Vehicles/RandomFetchRoute')
const AddTeamMember = require('./routes/Team/MemberRoutes')
const FetchTeamMember = require('./routes/Team/MemberRoutes')
const ContactFormSubmissions = require('./routes/MailFormRoutes/ContactFormSubmissions')
const UserRoutes = require('./routes/auth.routes')

const fs = require('fs');
const uploadDir = './uploads';

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();

app.use(cors());
// app.use(bodyParser.json());

// Set up body-parser middleware
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

app.use('/uploads', express.static('uploads'));

app.use('/api/subscription', subscriptionRoutes);
app.use('/api/vehicles/detail/fetch', vehiclesDetailRouter);
app.use('/api/vehicles/detail/contact', vehiclesDetailContactRouter);
app.use('/api/add/listing', AddlistingRoutes);
app.use('/api/stock', StockListingRoutes)
app.use('/api/vehicle/', ListingFilterCondition)
app.use('/api/vehicle/make', FilterByMake)
app.use('/api/vehicles/random/expensive', RandomExpensiveCar)
app.use('/api/team/member', AddTeamMember)
app.use('/api/team/member', FetchTeamMember)
app.use('/api/contact/form', ContactFormSubmissions)
app.use('/api/auth', UserRoutes)


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
