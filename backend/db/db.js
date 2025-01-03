
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('elite_motors', 'Wayne', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  // Disable logging (optional)
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database Connection is established');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

module.exports = sequelize;
