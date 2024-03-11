// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors'); // Import cors middleware

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware to allow cross-origin requests

// MongoDB connection
const uri = 'mongodb+srv://helip0269:registration@cluster0.eccq4oj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Create new user
    const newUser = new User({ email, password });
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
