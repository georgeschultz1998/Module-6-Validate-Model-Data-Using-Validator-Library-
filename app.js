const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('MongoDB connected!');
}).catch((err) => {
  console.log('MongoDB connection error:', err);
});

// Define routes
const accountRoutes = require('./routes/accountRoutes');
const customerRoutes = require('./routes/customerRoutes');

app.use('/accounts', accountRoutes);
app.use('/customers', customerRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
