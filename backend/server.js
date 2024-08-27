const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Regex for validating email
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Regex for validating phone number
        return /^\d{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create a new contact entry
    const newContact = new Contact({ name, email, phone, message });

    // Save to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
