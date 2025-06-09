const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');

dotenv.config();

const app = express();
connectDB(); // <--- CALL IT HERE

app.use(cors({origin: 'https://mucisa-sci-maseno-university.netlify.app/'}));
app.use(express.json());

// Routes
app.use('/api', registrationRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


