const mongoose = require('mongoose');
const validator = require('validator');

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Invalid email format']
  },
  visitedAttractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }]
});

module.exports = mongoose.model('Visitor', visitorSchema); 