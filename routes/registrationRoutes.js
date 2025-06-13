const express = require('express');
const router = express.Router();
 const Registration = require('../models/Registration');
    router.post('/register', async (req, res) => {
      try {
        const { email, admNumber } = req.body; // Extract email and admNumber
    
        // Check for existing email
        const existingEmail = await Registration.findOne({ email });
        if (existingEmail) {
          return res.status(400).json({ field: 'email', error: 'Email Already Exists. Kindly wait for your Affliation' });
        }
    
        // Check for existing admission number
        const existingAdmNumber = await Registration.findOne({ admNumber });
        if (existingAdmNumber) {
          return res.status(400).json({ field: 'admNumber', error: 'Admission Number Already Exists. Kindly wait for your Affliation' });
        }
    
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({ message: 'Registration successful' });
      } catch (error) {
        if (error.name === 'ValidationError') {
          const errors = Object.values(error.errors).map(err => err.message);
          return res.status(400).json({ errors });
        }
        console.error("Registration error:", error); // Log the error on server side!
        res.status(500).json({ error: 'Server error' });
      }
    });

module.exports = router;
