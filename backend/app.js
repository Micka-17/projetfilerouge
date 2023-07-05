const express = require('express');
const bodyParser = require('body-parser'); // Body parsing middleware
const postRoutes = require('./routes/post'); // Importing post routes
const userRoutes = require('./routes/user'); // Importing user routes
const path = require('path'); // Path module for working with file paths
const fs = require('fs'); // File system module
const cors = require('cors'); // CORS middleware

const app = express(); // Creating the Express application

// CORS configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allowing requests from all origins
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Allowing specific headers
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Allowing specific HTTP methods
  res.setHeader('Access-Control-Allow-Credentials', true); // Allowing credentials
  next();
});

app.use(express.json()); // Parsing JSON bodies

app.use('/images', express.static(path.join(__dirname, 'images'))); // Serving static files from the 'images' directory
app.use('/api/posts', postRoutes); // Using the post routes
app.use('/api/auth', userRoutes); // Using the user routes

module.exports = app; // Exporting the Express application