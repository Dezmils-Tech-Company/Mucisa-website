const express = require('express');
const router = express.Router();
 const Registration = require('../models/Registration');

router.post('/register', async (req, res) => {
  try {
    
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ errors });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
