const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  personal: {
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    telephone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: Date, required: true }
  },
  faculty: {
    Faculty: { type: String},
    course: { type: String, required: true },
    yearOfStudy: { type: Number, required: true },
    admNumber: { type: String, required: true }
  },
  tech: {
    Language: String,
    Tool: String,
    stack: String,
    Skill:  String, 
    GitHub: String,
 reason: String,
    Expectations: String,
    Time: String,
    source: String,
    community: String, 
  },
  involvement: {
    type: Object,
    default: {}
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
