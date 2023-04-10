const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes
const accountRoutes = require('./routes/accountRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Use account and customer routes
app.use('/accounts', accountRoutes);
app.use('/customers', customerRoutes);

// Asynchronous connection to the database
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error(err));


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
